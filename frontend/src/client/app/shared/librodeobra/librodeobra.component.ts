import { Component, Output, Input, EventEmitter, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/index';
import { RestService } from '../../services/index';

@Component({
    moduleId: module.id,
    selector: 'libro-de-obra',
    templateUrl: 'librodeobra.component.html',
    styleUrls: ['librodeobra.component.css']
})
export class LibrodeObraComponent implements OnInit{
	@Input() obra:number;
	@Output() view:EventEmitter<any> = new EventEmitter();
	private rest_service:RestService
	private registros:any[] = [];
	constructor(rest:RestService){
		this.rest_service = rest;
		this.fetch();
	}
	fetch(){
		this.rest_service.get('/libro?OBRA='+this.obra).subscribe(
		    data => {
		    	this.registros = data;
		    },
		    err => console.error(err)
		);
	}
	ngOnInit() {
	  this.fetch();
	}
	close(){
		this.obra = null;
		this.view.emit();
	}
}
