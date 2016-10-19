import { Route} from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { InformesRoutes } from './informes/informes.routes';
import { SemaforoRoutes } from './semaforo/semaforo.routes';
import { MapaRoutes } from './mapa/mapa.routes';
import { UsersRoutes } from './users/users.routes';
import { GuardService } from '../../services/index';
// import { ChartRoutes } from './examples/charts/index';
// import { BlankPageRoutes } from './blank-page/index';
// import { TableRoutes } from './examples/tables/index';
// import { FormRoutes } from './examples/forms/index';
// import { GridRoutes } from './examples/grid/index';
// import { BSComponentRoutes } from './examples/bs-component/index';
// import { BSElementRoutes } from './examples/bs-element/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: '',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
        ...UsersRoutes,
        ...SemaforoRoutes,
        ...MapaRoutes,
        ...InformesRoutes,
	    	// ...ChartRoutes,
	    	// ...BSComponentRoutes,
      //       ...TableRoutes,
	    	// ...BlankPageRoutes,
      //       ...FormRoutes,
      //       ...GridRoutes,
      //       ...BSElementRoutes
    	],
        canActivate: [GuardService]
  	}
];
