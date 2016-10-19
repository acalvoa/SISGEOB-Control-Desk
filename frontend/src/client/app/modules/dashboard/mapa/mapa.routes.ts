import { Route } from '@angular/router';

import { MapaComponent } from './mapa.component';

export const MapaRoutes: Route[] = [
  	{
    	path: 'mapa/:obra',
    	component: MapaComponent
  	},
  	{
    	path: 'mapa',
    	component: MapaComponent
  	}
];
