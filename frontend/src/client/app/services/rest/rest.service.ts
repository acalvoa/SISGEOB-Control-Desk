import { Injectable} from '@angular/core';
import { Config } from '../../shared/index';
import {Http, Response, Headers} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {
	http:Http;
	//construimos los metodos
	constructor(http: Http, private router: Router) {
		this.http = http;
	}
	private createHeaders() {
		var headers = new Headers();
	    headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return headers;
	}
	public post(data:any, uri:string) {
		let body:string = "";
		for(let key in data){
			if(data[key] != null && data[key] != ""){
				if(typeof data[key] == "object") data[key] = JSON.stringify(data[key]);
				body += key+`=${data[key]}&`;
			}
		}
		body = body.substring(0,(body.length-1));
		let header = this.createHeaders();
		return this.http.post(Config.API+uri, body, {
	      	headers: header,
	      	withCredentials: true
	    }).map((res:Response) => {
			let response = res.json();
			return response;
		});
	}
	public postMap(data:any, uri:string) {
		let body:string = "";
		for(let key in data){
			if(data[key] != null && data[key] != ""){
				if(typeof data[key] == "object") data[key] = JSON.stringify(data[key]);
				body += key+`=${data[key]}&`;
			}
		}
		body = body.substring(0,(body.length-1));
		let header = this.createHeaders();
		return this.http.post(Config.API+uri, body, {
	      	headers: header,
	      	withCredentials: true
	    });
	}
	// FOR JWT IMPLEMENTATION (FUTURE)
	public get(uri:string) {
		let header = this.createHeaders();
		return this.http.get(Config.API+uri, {
	      	headers: header,
	      	withCredentials: true
	    }).map((res:Response) => {
			let response = res.json();
			return response;
		});
	}
	public getMap(uri:string) {
		let header = this.createHeaders();
		return this.http.get(Config.API+uri, {
	      	headers: header,
	      	withCredentials: true
	    }).map((res:Response) => {
			let response = res.json();
			return response;
		});
	}
	public delete(id:number,uri:string) {
		let header = this.createHeaders();
		return this.http.delete(Config.API+uri+"/"+id, {
	      	headers: header,
	      	withCredentials: true
	    }).map((res:Response) => {
			let response = res.json();
			return response;
		});
	}
	put() {

	}
}
