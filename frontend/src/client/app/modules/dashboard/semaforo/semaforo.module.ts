import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SemaforoComponent }from './semaforo.component';
import { FormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TotalPipe } from '../../../pipes/index';


@NgModule({
    imports: [CommonModule,FormsModule,NgbTooltipModule],
    declarations: [SemaforoComponent,TotalPipe],
})

export class SemaforoModule { }
