import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { FormsModule} from '@angular/forms' ;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        TablesRoutingModule,
        PageHeaderModule
    ],
    declarations: [TablesComponent]
})
export class TablesModule { }
