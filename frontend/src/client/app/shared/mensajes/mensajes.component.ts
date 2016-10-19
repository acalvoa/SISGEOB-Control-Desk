import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/index';
import { RestService } from '../../services/index';

@Component({
    moduleId: module.id,
    selector: 'mensajes',
    templateUrl: 'mensajes.component.html',
    styleUrls: ['mensajes.component.css']
})
export class MensajesComponent {
	@Input() obra:number;
	@Input() servicio:number;
	@Output() view:EventEmitter<any> = new EventEmitter();
	private mensaje:string;
	private rest_service:RestService
	constructor(rest:RestService){
		this.rest_service = rest;
	}
	close(){
		this.mensaje = null;
		this.obra = null;
		this.servicio = null;
		this.view.emit();
	}
	save(){
		event.preventDefault();
		let msg = {
			OBRA: this.obra,
			SERVICIO: this.servicio,
			MENSAJE: this.mensaje
		};
		this.rest_service.post(msg, '/mensajes').subscribe(
		    data => {
		    	this.close();
		    },
		    err => console.error(err)
		);
	}
}
