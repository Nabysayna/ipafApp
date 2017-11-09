import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";


@Pipe({
  name: 'filtrefiliere'
})
export class FiltrefilierePipe implements PipeTransform {

  transform(dataTab: any[], filtrefiliere: string): any {
    if (filtrefiliere){
	    return _.filter(dataTab, row=>{ return ( row.filiere.toLowerCase() == filtrefiliere.toLowerCase() ) });
    }
    return dataTab ;
  }

}
