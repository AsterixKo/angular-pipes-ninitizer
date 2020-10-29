import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ninitizer'
})
export class NinitizerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let result: string = value;

    result = this.replaceAll(result, 'por', 'x');
    result = this.replaceAll(result, '¿', '');
    result = this.replaceAll(result, '¡', '');

    let capitalizeRandomly = '';
    for (const word of result) {
      console.log('word', word);
      const randomNumber = this.randomIntFromInterval(1, 2);
      if(randomNumber==1){
        capitalizeRandomly += word.toUpperCase();
      }else{
        capitalizeRandomly += word.toLowerCase();
      }
      
    }
    result = capitalizeRandomly + 'tO xUlo. xOxO';
    return result;
  }

  replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
