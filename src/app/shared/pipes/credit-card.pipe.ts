import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: any): string {
    const nS = value?.split('');
    return ` ${nS[0]}${nS[1]}${nS[2]}${nS[3]} ${nS[4]}${nS[5]}${nS[6]}${nS[7]} ${nS[8]}${nS[9]}${nS[10]}${nS[11]} ${nS[12]}${nS[13]}${nS[14]}${nS[15]}`;
  }

}
