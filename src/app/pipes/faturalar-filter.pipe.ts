import { Pipe, PipeTransform } from '@angular/core';
import { Fatura } from '../models/entities/fatura';

@Pipe({
  name: 'faturalarFilter'
})
export class FaturalarFilterPipe implements PipeTransform {

  transform(faturalar: Fatura[], filterText:string): Fatura[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?faturalar.filter(b=>b.tc.toLocaleLowerCase().indexOf(filterText)!==-1):faturalar
  }
}
