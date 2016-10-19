import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { UsersComponent } from './users.component';
import { DatatableModule } from '../../../shared/index';
import { UserService } from '../../../services/index';

@NgModule({
    imports: [DatatableModule],
    declarations: [UsersComponent],
    exports: [UsersComponent],
    providers: [UserService]
})

export class UsersModule { }
