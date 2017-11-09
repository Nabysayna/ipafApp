import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'filtreannee'
})
export class FiltreanneePipe implements PipeTransform {

  transform(dataTab: any[], filtreannee: number): any {
    if (filtreannee){
	    return _.filter(dataTab, row=>{ return ( row.annee == filtreannee) });
    }
    return dataTab ;
  }

}
