import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: Array<any>, _filter: string): Array<any> {
    if (!items || items.length < 0 || _filter === '') {
      return items;
    }

    return items.filter(item => {
      let matchingField = Object.keys(item).find(key => {
        return item[key].toString().toLowerCase().includes(_filter.toLowerCase());
      });
      return matchingField;
    });
  }
}
