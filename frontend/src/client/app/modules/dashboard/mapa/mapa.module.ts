import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { MapaComponent }from './mapa.component';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [CommonModule,FormsModule,NgbTooltipModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6Bf-4zuKPSdFtGF4ZYIORhz2MVH1assw'
    })],
    declarations: [MapaComponent],
    exports: [MapaComponent]
})

export class MapaModule { }
