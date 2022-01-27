import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ShoppingBisService } from './services/shopping-bis.service';

@Component({
  selector: 'app-shopping-bis',
  templateUrl: './shopping-bis.component.html',
  styleUrls: ['./shopping-bis.component.scss']
})
export class ShoppingBisComponent implements OnInit {

  articleLabel : string =""
  panier : string[] = []

  constructor(private service : ShoppingBisService) { }

  ngOnInit(): void {
  }

  ajoutPanier() {

  }
  // ajoutPanier() {
  //   this.panier.push(this.article)
  // }

  // deletePanier(index : number){
  //   this.panier.splice(index, 1)
  // }
  // onParent(message : string) {
  //   this.messageByChild = message
  // }
}