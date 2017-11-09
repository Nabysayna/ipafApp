import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

export class Etudiant{
	matricule : string;
	prenom : string ;
	nom : string ;
	dateNaiss : string ;
	lieuNaiss : string ;
	sexe : string ;
	telephone : string ;
	adresse : string ;
	email : string ;
	tuteur : string ;
	telTuteur : string ;
	adrTuteur : string ;
	diplome : string ;
	anneeDiplome : number ;
	pce : string ;
	enChargeEtu : string ;
	professionnel : string ;
	experience : number ;
	filiere : string ;
	annee : number ;
	dateInscription : string ;
	connaissInstitut : string ;
	docsFournis : string ;
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
  animations: [routerTransition()]
})
export class InscriptionComponent implements OnInit {
	etudiantInscrits : Etudiant[] ;
	inscrire = true ;
	filtrematricule = "" ;
	filtrefiliere = "" ;
	filtreannee = "" ;
	filtresexe = "" ;

	filieres = ["IDE", "SFE", "IB", "AIE", "TS", "LB", "DM"] ;
	matricule : string;
	prenom : string ;
	nom : string ;
	dateNaiss : string ;
	lieuNaiss : string ;
	sexe : string = "Sexe";
	telephone : string ;
	adresse : string ;
	email : string ;
	tuteur : string ;
	telTuteur : string ;
	adrTuteur : string ;
	diplome : string ;
	anneeDiplome : number ;
	pce : string ;
	enChargeEtu : string ;
	professionnel : string ;
	experience : number ;
	filiere : string ;
	annee : number ;
	dateInscription : string ;
	connaissInstitut : string ;
	docsFournis : string ;


  constructor() { }

  ngOnInit() {
  	this.etudiantInscrits = [{matricule : "IDE12017001", prenom : "Mouhamadou Bachir", nom : "Kane", dateNaiss : "1997/06/20",  lieuNaiss : "Dakar", sexe : "M",	telephone : "779802382",	adresse : "Parcelles Assainies",	email : "ahma@gmail.com",	tuteur : "Abi Taalib", telTuteur : "7117111711",	adrTuteur : "Hejjaz",	diplome : "BAC",	anneeDiplome : 2017,	pce : "OUI",	enChargeEtu : "HEC pour tous",	professionnel : "NON",	experience :0 ,	filiere : "IDE",	annee : 1,	dateInscription : "2017/09/30",	connaissInstitut : "Relation Personnelle",	docsFournis : "Extrait de Naiss#Casier Judiciaire#Attestation légalisé diplôme#Frais d’inscription#Certificat de Nationalité "}, {matricule : "IB32017001", prenom : "Mariam", nom : "Bousso", dateNaiss : "1995/06/20",  lieuNaiss : "Dakar", sexe : "F",	telephone : "779802082",	adresse : "Sacre-Coeur",	email : "ahma@gmail.com",	tuteur : "Abi Taalib", telTuteur : "7117111711",	adrTuteur : "Hejjaz",	diplome : "BAC",	anneeDiplome : 2015,	pce : "OUI",	enChargeEtu : "HEC pour tous",	professionnel : "NON",	experience :0 ,	filiere : "IB",	annee : 3,	dateInscription : "2017/09/30",	connaissInstitut : "Autres",	docsFournis : "Extrait de Naiss#Casier Judiciaire#Attestation légalisé diplôme#Frais d’inscription#Certificat de Nationalité "}, {matricule : "IB32017002", prenom : "Rokhaya", nom : "Sy", dateNaiss : "1995/09/20",  lieuNaiss : "Thies", sexe : "F",	telephone : "779802012",	adresse : "Guediawaye",	email : "ahma@gmail.com",	tuteur : "Abi Taalib", telTuteur : "7117111711",	adrTuteur : "Hejjaz",	diplome : "BAC",	anneeDiplome : 2015,	pce : "non",	enChargeEtu : "",	professionnel : "NON",	experience :0 ,	filiere : "IB",	annee : 3,	dateInscription : "2017/09/30",	connaissInstitut : "Reseaux Sociaux",	docsFournis : "Extrait de Naiss#Casier Judiciaire#Attestation légalisé diplôme#Frais d’inscription#Certificat de Nationalité "}, {matricule : "SFE22017001", prenom : "Moussa", nom : "Dia", dateNaiss : "1998/12/30",  lieuNaiss : "Thies", sexe : "M",	telephone : "779802012",	adresse : "Guediawaye",	email : "ahma@gmail.com",	tuteur : "Abi Taalib", telTuteur : "7117111711",	adrTuteur : "Hejjaz",	diplome : "BAC",	anneeDiplome : 2015,	pce : "non",	enChargeEtu : "",	professionnel : "OUI",	experience :1 ,	filiere : "SFE",	annee : 3,	dateInscription : "2017/09/30",	connaissInstitut : "Medias",	docsFournis : "Extrait de Naiss#Casier Judiciaire#Attestation légalisé diplôme#Frais d’inscription#Certificat de Nationalité "}]
  }

  validerInscription(){
  	this.etudiantInscrits.push({matricule : this.matricule, prenom : this.prenom, nom : this.nom, dateNaiss : this.dateNaiss,  lieuNaiss : this.lieuNaiss, sexe : this.sexe,	telephone : this.telephone,	adresse : this.adresse,	email : this.email,	tuteur : this.tuteur, telTuteur : this.telTuteur,	adrTuteur : this.adrTuteur,	diplome : this.diplome,	anneeDiplome : this.anneeDiplome,	pce : this.pce,	enChargeEtu : this.enChargeEtu,	professionnel : this.professionnel,	experience : this.experience ,	filiere : this.filiere,	annee : this.annee,	dateInscription : this.dateInscription,	connaissInstitut : this.connaissInstitut,	docsFournis : this.docsFournis} ) ;
  }



}
