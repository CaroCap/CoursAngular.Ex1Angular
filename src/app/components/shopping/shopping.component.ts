import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  article : string = ""
  // panier : Array<string> = []
  panier : string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  ajoutPanier() {
    this.panier.push(this.article)
  }

  deletePanier(index : number){
    this.panier.splice(index, 1)
    console.log("Panier", this.panier)
    console.log("index parent" , index)

  }
  // onParent(message : string) {
  //   this.messageByChild = message
  // }
}
