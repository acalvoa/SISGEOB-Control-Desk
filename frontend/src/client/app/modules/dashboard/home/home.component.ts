import { Component } from '@angular/core';
import { RestService } from '../../../services/index';
import { UserService } from '../../../services/index';
import { Router} from '@angular/router';
/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {
	private rest:RestService;
	//VARIABLES DE LOS FILTROS POR SERVICIOS
	private servicios:any[];
	private s_filtro:any[];
	//VARIABLES DE LOS MENSAJES
	private mensajes:any[];
	private s_mensajes:any[];
	//VARIABLES DE LAS OBRAS
	private obras:any[];
	private s_obras:any[];
	//VARIABLES DE LAS ALERTAS
	private alertas:any[];
	private s_alertas:any[];
	//CONTROL DE MODAL MENSAJES;
	private view_mensaje:boolean = false;
	private obra_mensaje:number;
	private servicio_mensaje:number;
	//CONTROL DE LIBRO DE OBRAS;
	private view_libro:boolean = false;
	private obra_libro:number;
	//ANOTACIONES
	private view_anotaciones = false;
	private obra_anotaciones:number;
	private obras_anotaciones:any[];
	private user:number;

	constructor(rest:RestService, user:UserService, private router:Router){
		this.rest = rest;
		this.getServicios();
		this.getMensajes();
		this.getObras();
		this.getAlertas();
		this.user = user.getUser().ID_USER;
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
	public getMensajes(){
		this.rest.get('/mensajes').subscribe(
		    data => {
		    	this.mensajes = data;
		    	this.s_mensajes = data;
		    },
		    err => console.error(err)
		);
	}
	public getAlertas(){
		this.rest.get('/alertas').subscribe(
		    data => {
		    	this.alertas = data;
		    	this.s_alertas = data;
		    },
		    err => console.error(err)
		);
	}
	public getObras(){
		this.rest.get('/obras').subscribe(
		    data => {
		    	this.obras = data;
		    	this.s_obras = data;
		    },
		    err => console.error(err)
		);
	}
	filter_by_service(filtro:string){
		this.s_obras = [];
		for(let i=0; i < this.obras.length; i++){
			if(this.obras[i].SERVICIO.NOMBRE.toUpperCase() == filtro.toUpperCase()){
				this.s_obras.push(this.obras[i]);
			}
		}
		this.s_mensajes = [];
		for(let i=0; i < this.mensajes.length; i++){
			if(this.mensajes[i].SERVICIO.NOMBRE.toUpperCase() == filtro.toUpperCase()){
				this.s_mensajes.push(this.mensajes[i]);
			}
		}
		this.s_alertas = [];
		for(let i=0; i < this.alertas.length; i++){
			if(this.alertas[i].SERVICIO.NOMBRE.toUpperCase() == filtro.toUpperCase()){
				this.s_alertas.push(this.alertas[i]);
			}
		}
	}
	//FILTRAR SERVICIOS
	public filtrar_servicio(filtro:string){
		if(filtro == ""){
			this.s_filtro = this.servicios;
			this.s_mensajes = this.mensajes;
			this.s_obras = this.obras;
			this.s_alertas = this.alertas;
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
	//FILTRAR SERVICIOS
	public filtrar_obras(filtro:string){
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
	//ENVIAMOS MENSAJES
	send_message(obra:number, servicio:number){
		this.obra_mensaje = obra;
		this.servicio_mensaje = servicio;
		this.view_mensaje = true;
	}
	view_msg(){
		this.view_mensaje = !this.view_mensaje;
	}
	//ACCEDEMOS AL LIBRO DE OBRAS
	view_book(){
		this.view_libro = !this.view_libro;
	}
	open_book(obra:number){
		this.obra_libro = obra;
		this.view_libro = true;
	}
	//ANOTACIONES
	view_anota(){
		this.view_anotaciones = !this.view_anotaciones;
	}
	open_anotaciones(obra:number){
		this.rest.get('/anotaciones?OBRA='+obra+'&USER='+this.user).subscribe(
		    data => {
		    	this.obras_anotaciones = data;
		    	this.obra_anotaciones = obra;
		    	this.view_anotaciones = true;
		    },
		    err => console.error(err)
		);
	}
	gogeo(obra:any){
		this.router.navigate(['/mapa',obra.ID_OBRA]);
	}
}
