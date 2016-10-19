import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/index';
import { RestService } from '../../services/index';

@Component({
    moduleId: module.id,
    selector: 'anotaciones',
    templateUrl: 'anotaciones.component.html',
    styleUrls: ['anotaciones.component.css']
})
export class AnotacionesComponent {
	@Input() obra:number;
	@Input() registros:any[];
	@Output() view:EventEmitter<any> = new EventEmitter();
	private rest_service:RestService;
	private user:number;
	private views:string = "visor";
	private inReg = {
		NOMBRE: "",
		MENSAJE: ""
	}
	constructor(rest:RestService, user:UserService){
		this.rest_service = rest;
		this.user = user.getUser().ID_USER;
	}
	fetch(){
		this.rest_service.get('/anotaciones?OBRA='+this.obra+'&USER='+this.user).subscribe(
		    data => {
		    	console.log(data);
		    	this.registros = data;
		    },
		    err => console.error(err)
		);
	}
	close(){
		this.registros = null;
		this.view.emit();
	}
	create(){
		let objReg = {
			NOMBRE: this.inReg.NOMBRE,
			MENSAJE: this.inReg.MENSAJE,
			USER: this.user,
			OBRA: this.obra
		};
		this.rest_service.post(objReg, '/anotaciones').subscribe(
		    data => {
		    	this.registros.push(data);
		    	this.views = "visor";
		    },
		    err => console.error(err)
		);
	}
}
