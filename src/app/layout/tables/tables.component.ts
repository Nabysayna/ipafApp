import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as _ from "lodash";

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

	filtreAnnee : any ;
	filtreSemestre : any ;
	etudiantInscrits : any ;
  filiereChoisie : string ;
  closeResult: string;
  editableRowsOnReleve : any[] = [] ;
  releveBtnsTxt : string[] = [] ;

  matieres : any[] = [{libelle:"matiere 1", nbreCtl:3, controles : [12,13,14], exam: 18, moyenne:15.5}, {libelle:"matiere 2", nbreCtl:2, controles : [13,13], exam: 17, moyenne:15}, {libelle:"matiere 3", nbreCtl:3, controles : [], exam:undefined, moyenne:undefined}] ;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.filiereChoisie = localStorage.getItem("filiere");
  }

  getCurrentFiliere(){
    this.filiereChoisie = localStorage.getItem("filiere");
    return localStorage.getItem("filiere");
  }
   
  getReleveBtnTxt(i : number){ return this.releveBtnsTxt[i] } ;

  setReleveBtnTxt(i : number){
    if(this.releveBtnsTxt[i]=="Editer"){
      this.releveBtnsTxt[i]="Enregistrer" ;
      this.editableRowsOnReleve.push(i) ;
    }
    else{
      this.releveBtnsTxt[i]="Editer" ;
      this.editableRowsOnReleve.splice(i,1) ;
    }
  }

  hasSelected(){
    return (this.filtreAnnee && this.filtreAnnee!="" && this.filtreSemestre && this.filtreSemestre!="") ;
  }

  afficherEtudiants(){
      this.etudiantInscrits = [{matricule : "IDE12017001", prenom : "Mouhamadou Bachir", nom : "Kane", dateNaiss : "1997/06/20",  lieuNaiss : "Dakar", sexe : "M",  telephone : "779802382",  adresse : "Parcelles Assainies",  email : "ahma@gmail.com", tuteur : "Abi Taalib", telTuteur : "7117111711",  adrTuteur : "Hejjaz", diplome : "BAC",  anneeDiplome : 2017,  pce : "OUI",  enChargeEtu : "HEC pour tous",  professionnel : "NON",  experience :0 , filiere : "IDE",  annee : 1,  dateInscription : "2017/09/30", connaissInstitut : "Relation Personnelle",  docsFournis : "Extrait de Naiss#Casier Judiciaire#Attestation légalisé diplôme#Frais d’inscription#Certificat de Nationalité "}, {matricule : "IB32017001", prenom : "Mariam", nom : "Bousso", dateNaiss : "1995/06/20",  lieuNaiss : "Dakar", sexe : "F",  telephone : "779802082",  adresse : "Sacre-Coeur",  email : "ahma@gmail.com", tuteur : "Abi Taalib", telTuteur : "7117111711",  adrTuteur : "Hejjaz", diplome : "BAC",  anneeDiplome : 2015,  pce : "OUI",  enChargeEtu : "HEC pour tous",  professionnel : "NON",  experience :0 , filiere : "IB", annee : 3,  dateInscription : "2017/09/30", connaissInstitut : "Autres",  docsFournis : "Extrait de Naiss#Casier Judiciaire#Attestation légalisé diplôme#Frais d’inscription#Certificat de Nationalité "}, {matricule : "IB32017002", prenom : "Rokhaya", nom : "Sy", dateNaiss : "1995/09/20",  lieuNaiss : "Thies", sexe : "F", telephone : "779802012",  adresse : "Guediawaye", email : "ahma@gmail.com", tuteur : "Abi Taalib", telTuteur : "7117111711",  adrTuteur : "Hejjaz", diplome : "BAC",  anneeDiplome : 2015,  pce : "non",  enChargeEtu : "", professionnel : "NON",  experience :0 , filiere : "IB", annee : 3,  dateInscription : "2017/09/30", connaissInstitut : "Reseaux Sociaux", docsFournis : "Extrait de Naiss#Casier Judiciaire#Attestation légalisé diplôme#Frais d’inscription#Certificat de Nationalité "}, {matricule : "SFE22017001", prenom : "Moussa", nom : "Dia", dateNaiss : "1998/12/30",  lieuNaiss : "Thies", sexe : "M",  telephone : "779802012",  adresse : "Guediawaye", email : "ahma@gmail.com", tuteur : "Abi Taalib", telTuteur : "7117111711",  adrTuteur : "Hejjaz", diplome : "BAC",  anneeDiplome : 2015,  pce : "non",  enChargeEtu : "", professionnel : "OUI",  experience :1 , filiere : "SFE",  annee : 3,  dateInscription : "2017/09/30", connaissInstitut : "Medias",  docsFournis : "Extrait de Naiss#Casier Judiciaire#Attestation légalisé diplôme#Frais d’inscription#Certificat de Nationalité "}]
  }

  rangAnnee(){
     if(this.filtreAnnee==1)
      return "Première" ;
     if(this.filtreAnnee==2)
      return "Deuxième" ;
     if(this.filtreAnnee==3)
      return "Troisième" ;
  }

  isToEdit(k){
    if (this.editableRowsOnReleve.indexOf(k) != -1)
      return true ;

    return false ;
  }  

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.editableRowsOnReleve = [] ;
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });

        for (let i=0; i<this.matieres.length ; i++){
          this.releveBtnsTxt[i] = "Editer" ;
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

}
