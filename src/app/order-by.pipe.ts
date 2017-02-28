import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<Object>, args: string): Array<Object> {

    console.log("calling pipe");


    if (array == null) {
      return null;
    }


    array.sort((a: any, b: any) => {
      if (a.firstName < b.firstName) {
        return -1;
      } else if (a.firstName> b.firstName) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
