import {ExtraOptions} from '@angular/router';
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {CrisisListComponent} from "./crisis-list/crisis-list.component";

export const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // scrollPositionRestoration: 'enabled',
  // onSameUrlNavigation: 'reload',
};

export const routes = [
  {path: 'crisis-list', component: CrisisListComponent},
  {path: 'heroes-list', component: HeroesListComponent},
];

