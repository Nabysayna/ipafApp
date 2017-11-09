import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
    isActive = false;
    showMenu = '';
    titre = '';


    constructor(public router: Router) {
    }

    ngOnInit(){
        this.titre = localStorage.getItem('titre');
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    storeChoosenField(filiere){
        //localStorage.removeItem("filiere") ;
        localStorage.setItem("filiere", filiere) ;
        this.router.navigate(['/tables']); 
    }

}
