import { Component } from '@angular/core';
import { RestService } from '../../../services/index';
import { UserService } from '../../../services/index';

/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'semaforo-cmp',
	templateUrl: 'semaforo.component.html',
    styleUrls: ['semaforo.component.css']
})

export class SemaforoComponent {
	private rest:RestService;
	//VARIABLES DE LOS FILTROS POR SERVICIOS
	private servicios:any[];
	private s_filtro:any[];

	constructor(rest:RestService, user:UserService){
		this.rest = rest;
		this.getServicios();
	}
	//FILTROS POR SERVICIO
	public getServicios(){
		this.rest.get('/servicios').subscribe(
		    data => {
		    	this.servicios = data;
		    	this.s_filtro = data;
		    },
		    err => console.error(err)
		);
	}
	//FILTRAR SERVICIOS
	public filtrar_servicio(filtro:string){
		if(filtro == ""){
			this.s_filtro = this.servicios;
			return;
		}
		this.s_filtro = [];
		for(let i=0; i < this.servicios.length; i++){
			if(this.s_filtro.length >= 6) break;
			if(this.servicios[i].NOMBRE.toUpperCase().indexOf(filtro.toUpperCase()) != -1){
				this.s_filtro.push(this.servicios[i]);
			}
		}
	}
}
