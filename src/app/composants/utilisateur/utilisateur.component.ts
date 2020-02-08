import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../../services/donnees.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  nom : string;
  age : number;
  email : string;
  hobby : hobby;

  constructor(private donnees: DonneesService) { 
    this.nom = "Mounir";
    this.age = 21;
    this.email = "mou95500@gmail.com";
    this.hobby = {
      hobbyUn:"Football",
      hobbyDeux:"Coder",
      hobbyTrois:"Apprendre"
    }
  }

  ngOnInit() {}
  onClick(){
    alert('Aucune informations !')
  }
}
interface hobby{
  hobbyUn:string;
  hobbyDeux:string;
  hobbyTrois:string;
}
