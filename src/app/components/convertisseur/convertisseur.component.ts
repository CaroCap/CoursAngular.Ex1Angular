import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.scss']
})
export class ConvertisseurComponent implements OnInit {

  //CONVERTISSEUR SECONDE
  nbSeconds : number = 90061 // 1 jour 1 heure 1 minute et 1 seconde
  //nbSeconds2 : number = 90120 // 1 jour 1 heure 2 minutes et 0 seconde

  // PUISSANCE
  varBase : number = 2
  varPow : number = 8
  
  // CONVERTISSEUR TEMPERATURE
  tempUser : number = 0
  unitUser : string = 'c'

  constructor() { }

  ngOnInit(): void {
  }

}
