import { Component } from '@angular/core';
import { UserService } from '../../../services/index';
import { RestService } from '../../../services/index';
/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'users-cmp',
	templateUrl: 'users.component.html',
    styleUrls: ['users.component.css']
})

export class UsersComponent {
	private user:UserService;
	private rest:RestService;
	public rows:Array<any> = [];
	public columns:any[] = [{
		name: "Nombre",
		match: "NAME"
	},{
		name: "Apellido",
		match: "LASTNAME"
	},{
		name: "Email",
		match: "EMAIL"
	},{
		name: "Rol",
		match: "ROLE",
		submatch: "NOMBRE_ROL"
	}];
	public tconfig:any = {
		items: 20,
		paginate: true,
		filtros: true,
		delete: true,
		edit: true
	};
	public datas:any[] = [];
	public sedes:any[] = [];
	public areas:any[] = [];
	//PANTALLA
	private action:string = "view";
	//ELEMENTO
	private newuser = {
		NAME: "",
		LASTNAME: "",
		EMAIL: "",
		PASSWORD: "",
		ROLE:1
	};
	//CONSTRUCTOR
	constructor(user:UserService, rest:RestService){
		this.rest = rest;
		this.user = user;
		this.user.isAdmin();
		this.getuser();
	}
	getuser(){
		this.user.getUsers().subscribe(
		    data => {
		    	console.log(data);
		    	this.datas = data;
		    },
		    err => console.error(err)
		);
	}
	createUser(event:any){
		event.preventDefault();
		this.rest.post(this.newuser, '/users').subscribe(
		    data => {
		    	this.datas.push(data);
		    	this.action = 'view';
		    	this.newuser = {
					NAME: "",
					LASTNAME: "",
					EMAIL: "",
					PASSWORD: "",
					ROLE:1
				};
		    },
		    err => console.error(err)
		);
	}
}
