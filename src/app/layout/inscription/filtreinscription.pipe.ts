import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'filtreinscription'
})
export class FiltreinscriptionPipe implements PipeTransform {

  transform(dataTab: any[], filtrematricule: string): any {
    if (filtrematricule){
	    return _.filter(dataTab, row=>{ return ( row.matricule.toLowerCase().indexOf(filtrematricule.toLowerCase())>-1 ) });
    }
    return dataTab ;
  }

}
