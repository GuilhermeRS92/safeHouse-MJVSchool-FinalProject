import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: any): string {
    const nS = value?.split('');
    return ` ${nS[0]}${nS[1]}${nS[2]}.${nS[3]}${nS[4]}${nS[5]}.${nS[6]}${nS[7]}${nS[8]}-${nS[9]}${nS[10]}`;
  }

}
