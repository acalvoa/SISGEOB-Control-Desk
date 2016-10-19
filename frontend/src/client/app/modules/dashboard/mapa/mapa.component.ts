import { Component, OnInit} from '@angular/core';
import { RestService } from '../../../services/index';
import { UserService } from '../../../services/index';
import { Router, ActivatedRoute, Params } from '@angular/router';
/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'mapa-cmp',
	templateUrl: 'mapa.component.html',
    styleUrls: ['mapa.component.css']
})

export class MapaComponent implements OnInit{
	private rest:RestService;
  	lat: number = 51.678418;
  	lng: number = 7.809007;
	constructor(rest:RestService, user:UserService, private route: ActivatedRoute,
    private router: Router){
		this.rest = rest;
		
	}
	ngOnInit() {
	  this.route.params.forEach((params: Params) => {
	     	let id = +params['obra'];
	     	if(!isNaN(id)){
	     		this.rest.get('/obras?ID_OBRA='+id).subscribe(
				    data => {
				    	data = data[0];
				    	this.lat = data.LAT;
				    	this.lng = data.LNG;
				    },
				    err => console.error(err)
				);
	     	}	
	   });
	}
	
}
