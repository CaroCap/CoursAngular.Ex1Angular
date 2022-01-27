import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-bis-list',
  templateUrl: './shopping-bis-list.component.html',
  styleUrls: ['./shopping-bis-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() listeCourse : Array<string> = []
  @Output() supprimerArticle : EventEmitter<number>
  @Output() plusArticle : EventEmitter<number>
  @Output() moinsArticle : EventEmitter<number>

  // index : number = 0

  constructor() { 
    this.supprimerArticle = new EventEmitter<number>()
    this.plusArticle = new EventEmitter<number>()
    this.moinsArticle = new EventEmitter<number>()
  }

  ngOnInit(): void {
  }

  ajoutArticle(index : number) {
    this.plusArticle.emit(index)
  }
  enleveArticle(index : number) {
    this.moinsArticle.emit(index)
  }
  deleteArticle(index : number) {
    this.supprimerArticle.emit(index)
  }
}
