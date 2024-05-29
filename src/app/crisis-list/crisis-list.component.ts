import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationStart, Router, RouterLink, Scroll} from "@angular/router";
import {filter, Subscription} from "rxjs";

@Component({
  selector: 'app-crisis-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.css'
})
export class CrisisListComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.subscription = this.router.events
      .pipe(
        filter((e) => e instanceof NavigationStart || e instanceof Scroll),
        filter((e) => {
          if (e instanceof Scroll) {
            return true;
          }
          return (<NavigationStart>e).navigationTrigger === 'popstate';
        }),
      )
      .subscribe((e) => {
        if (e instanceof NavigationStart) {
          console.log('Popped state event: ', e);
        } else {
          console.log('Scroll event: ', e);
        }
      });
    }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
