import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss']
})
export class ChronoComponent implements OnInit {

  public secondes : number = 0;
  public tempsInterval : any ;
  public actif : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  StartChrono(): void{
    // let secondes = this.tempsInterval;
    this.tempsInterval = setInterval(() => this.AugmentationChrono(),1000);
    this.actif = true;
  }

  AugmentationChrono(): number{
    console.log(this.secondes);
    return this.secondes+=1;
  }

  PauseChrono():void{
    clearInterval(this.tempsInterval);
    this.actif = false;
  }

  RestartChrono():void{
    clearInterval(this.tempsInterval);
    this.secondes = 0;
    this.actif = false;
  }

}
