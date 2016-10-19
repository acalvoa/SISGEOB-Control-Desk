import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HomeModule } from './home/home.module';
import { SemaforoModule } from './semaforo/semaforo.module';
import { MapaModule } from './mapa/mapa.module';
import { InformesModule } from './informes/informes.module';
import { UsersModule } from './users/users.module';
import { LibrodeObraComponent } from '../../shared/index';
import { AnotacionesComponent } from '../../shared/index';
import { MensajesComponent } from '../../shared/index';
// import { ChartModule } from './examples/charts/chart.module';
// import { BlankPageModule } from './blank-page/blankPage.module';
// import { TableModule } from './examples/tables/table.module';
// import { FormModule } from './examples/forms/forms.module';
// import { GridModule } from './examples/grid/grid.module';
// import { BSComponentModule } from './examples/bs-component/bsComponent.module';
// import { BSElementModule } from './examples/bs-element/bsElement.module';

import { DashboardComponent } from './dashboard.component';

import {NavbarComponent} from '../../shared/index';
import {SidebarComponent} from '../../shared/index';



@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
    	HomeModule,
        UsersModule,
        SemaforoModule,
        MapaModule,
        InformesModule
     //    ChartModule,
     //    TableModule,
     //    FormModule,
     //    GridModule,
    	// BSComponentModule,
     //    BSElementModule,
     //    BlankPageModule
    ],
    declarations: [DashboardComponent, NavbarComponent,SidebarComponent],
    exports: [DashboardComponent, NavbarComponent, SidebarComponent]
})

export class DashboardModule { }
