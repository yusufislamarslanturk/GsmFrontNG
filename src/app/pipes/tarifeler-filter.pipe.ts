import { Pipe, PipeTransform } from '@angular/core';
import { Tarife } from '../models/entities/tarife';

@Pipe({
  name: 'tarifelerFilter'
})
export class TarifelerFilterPipe implements PipeTransform {

  transform(tarifeler: Tarife[], filterText:string): Tarife[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?tarifeler.filter(b=>b.tarifeAdi.toLocaleLowerCase().indexOf(filterText)!==-1):tarifeler
  }
}
