import { ApplicationConfig } from '@angular/core';
import {provideRouter, withHashLocation, withInMemoryScrolling, withRouterConfig} from '@angular/router';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withInMemoryScrolling({
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  }))]
};
