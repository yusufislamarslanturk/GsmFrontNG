import { Musteri } from 'src/app/models/entities/musteri';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'musterilerFilter'
})
export class MusterilerFilterPipe implements PipeTransform {

  transform(musteriler: Musteri[], filterText:string): Musteri[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?musteriler.filter(b=>b.tc.toLocaleLowerCase().indexOf(filterText)!==-1):musteriler
  }

}
