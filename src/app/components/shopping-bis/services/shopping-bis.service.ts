import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingBisService {

  panier : Article[] = []
  
  constructor() { }

  ajouterArticle(article : Article){
    // fonction pour vérifier si article déjà dans le panier
    let index = this.panier.findIndex(x=> x.label == article.label)

    // si fonction ne trouve pas article dans panier il renvoie -1
    if (index == -1) this.panier.push(article)
    else this.plusArticle(index)
  }

  supprimerArticle(index : number){
    this.panier.splice(index, 1)
  }

  plusArticle(index : number){
    // this.panier[index].quantite += 1
    this.panier[index].quantite ++
  }

  moinsArticle(index : number){
    if (this.panier[index].quantite > 1) this.panier[index].quantite --
    else this.supprimerArticle(index)
  }
}
