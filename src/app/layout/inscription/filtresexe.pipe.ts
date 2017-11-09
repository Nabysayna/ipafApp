import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'filtresexe'
})
export class FiltresexePipe implements PipeTransform {

  transform(dataTab: any[], filtresexe: string): any {
    if (filtresexe){
	    return _.filter(dataTab, row=>{ return ( row.sexe.toLowerCase() == filtresexe.toLowerCase() ) });
    }
    return dataTab ;
  }

}
