import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InformesComponent }from './informes.component';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
    imports: [CommonModule,FormsModule,NgbTooltipModule,ChartsModule],
    declarations: [InformesComponent],
    exports: [InformesComponent]
})

export class InformesModule { }
