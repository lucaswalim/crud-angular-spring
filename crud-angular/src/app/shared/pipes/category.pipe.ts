import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    let icon = '';
    switch(value) {
      case 'front-end': {
        icon =  'code';
        break;
      }
      case 'backend': {
        icon = 'computer'
        break;
      }
    }

    return icon;
  }

}
