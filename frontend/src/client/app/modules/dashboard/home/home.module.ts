import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HomeComponent }from './home.component';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { clpPipe } from '../../../pipes/index';
import { LibrodeObraComponent } from '../../../shared/index';
import { AnotacionesComponent } from '../../../shared/index';
import { MensajesComponent } from '../../../shared/index';

@NgModule({
    imports: [CommonModule,FormsModule,NgbTooltipModule],
    declarations: [HomeComponent,clpPipe,LibrodeObraComponent,AnotacionesComponent,MensajesComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
