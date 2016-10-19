import { Component } from '@angular/core';
import { RestService } from '../../../services/index';
import { UserService } from '../../../services/index';
/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'informes-cmp',
	templateUrl: 'informes.component.html',
    styleUrls: ['informes.component.css']
})

export class InformesComponent {
	private rest:RestService;
	private user_service:UserService;
	//EJEMṔLOS DE GRAFICOS
	private datasets:any = [
	];
	private alertas:any = [
	];

	private labels:any = [];
	private labels_a:any = [];

	private options:any = {
		responsive:true,
		legend:{
			position: 'right'
		}
	};
	private inv_services:boolean = false;
	// MIS INFORMES
	private inReg:any = {
		NOMBRE: "",
		DESCRIPCION: "",
		ESTRUCTURA:[],
		USER: null
	};
	private informes:any[];
	private s_informes:any[];
	//DESPLIEGUE
	private view:string = 'visor';
	//CONSTRUCTOR
	constructor(rest:RestService, user:UserService){
		this.rest = rest;
		this.user_service = user;
		this.getServicios();
		this.getInformes();
	}
	//FILTROS POR SERVICIO
	public getServicios(){
		this.rest.get('/servicios').subscribe(
		    data => {
		    	let data_graph:any = {
			      	label: "Inversión por Servicio",
			      	data: []
			    }
			    let alertas_graph:any = {
			      	label: "Alertas por Servicio",
			      	data: []
			    }
			    let data_labels:string[] = [];
		    	for(let i=0;i<data.length;i++){
		    		let monto = 0;
		    		if(!data[i].OBRAS) continue;
		    		for(let l=0; l<data[i].OBRAS.length;l++){
		    			monto += data[i].OBRAS[l].MONTO;
		    		}
		    		data_labels.push(data[i].NOMBRE);
		    		data_graph.data.push(monto);
		    		alertas_graph.data.push(data[i].ALERTAS.length);
		    	}
		    	this.labels = data_labels;
		    	this.labels_a = data_labels;
		    	this.datasets.push(data_graph);
		    	this.alertas.push(alertas_graph);
		    	this.inv_services = true;
		    },
		    err => console.error(err)
		);
	}
	public filtrar_informe(filtro:string){
		if(filtro == ""){
			this.s_informes = this.informes;
			return;
		}
		this.s_informes = [];
		for(let i=0; i < this.informes.length; i++){
			if(this.informes[i].NOMBRE.toUpperCase().indexOf(filtro.toUpperCase()) != -1){
				this.s_informes.push(this.informes[i]);
			}
		}
	}
	//FILTROS POR SERVICIO
	public getInformes(){

		this.rest.get('/informes?USER='+this.user_service.getUser().ID_USER).subscribe(
		    data => {
		    	this.informes = data;
		    	this.s_informes = data;
		    },
		    err => console.error(err)
		);
	}
	public save(){
		this.inReg.USER = this.user_service.getUser().ID_USER;
		this.rest.post(this.inReg, '/informes').subscribe(
		    data => {
		    	this.informes.push(data);
		    	this.s_informes = this.informes;
		    	this.inReg = {
					NOMBRE: "",
					DESCRIPCION: "",
					ESTRUCTURA:[]
				};
		    	this.view = "visor";
		    },
		    err => console.error(err)
		);
	}
	
}
