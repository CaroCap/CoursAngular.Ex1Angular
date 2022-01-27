import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() listeCourse : Array<string> = []
  @Output() supprimerArticle : EventEmitter<number>

  // index : number = 0

  constructor() { 
    this.supprimerArticle = new EventEmitter<number>()
  }

  ngOnInit(): void {
  }

  deleteArticle(index : number) {
    this.supprimerArticle.emit(index)
    console.log("butonAction" , index)
  }
}
