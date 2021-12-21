import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoFormat'
})
export class ChronoFormatPipe implements PipeTransform {

  transform(value: number): string {
    // let secondes = value;
    // let minutes;
    // if (secondes >=60){
    //   minutes = Math.floor(secondes/60);
    //   secondes = secondes-60*minutes;
    // }
    // else { minutes = 0 }
    // let chrono = `${(minutes<10)? '0'+ minutes.toString(): minutes.toString()} min : ${(secondes<10)? '0'+ secondes.toString(): secondes.toString()} sec`;
    // return chrono;
    let secondes = value%60;
    let minutes = Math.floor(value/60);
    return `${minutes<10?'0'+minutes:minutes} min ${(secondes<10)?'0'+secondes:secondes} sec`
  }

}
