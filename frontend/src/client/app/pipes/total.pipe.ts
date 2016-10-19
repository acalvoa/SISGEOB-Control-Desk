import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'TOTAL'})
export class TotalPipe implements PipeTransform {
  transform(value:any, args:string[]) : any {
  	var total = 0;
  	for(let i=0;i<value.length;i++){
  		total += value[i].MONTO;
  	}
    value = "$"+total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return value
  }
}