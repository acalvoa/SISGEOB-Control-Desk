import { Route } from '@angular/router';

import { HomeComponent } from './home.component';

export const HomeRoutes: Route[] = [
	{
    	path: '',
    	redirectTo: 'dashboard', 
    	pathMatch: 'full'
  	},
  	{
    	path: 'dashboard',
    	component: HomeComponent
  	}
];
