import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { FormsModule} from '@angular/forms' ;
import { InscriptionComponent } from './inscription.component';
import { InscriptionRoutingModule } from './inscription-routing.module';
import { PageHeaderModule } from '../../shared';
import { FiltreinscriptionPipe } from './filtreinscription.pipe';
import { FiltresexePipe } from './filtresexe.pipe';
import { FiltrefilierePipe } from './filtrefiliere.pipe';
import { FiltreanneePipe } from './filtreannee.pipe';


@NgModule({
  imports: [
    CommonModule,
    InscriptionRoutingModule,
    FormsModule,
    PageHeaderModule
  ],
  declarations: [InscriptionComponent, FiltreinscriptionPipe, FiltresexePipe, FiltrefilierePipe, FiltreanneePipe]
})
export class InscriptionModule { }
