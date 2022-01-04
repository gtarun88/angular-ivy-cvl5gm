import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerEmailFilter',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal =
        val.id.toLocaleLowerCase().includes(args) ||
        val.emailId.toLocaleLowerCase().includes(args) ||
        val.first_name.toLocaleLowerCase().includes(args) ||
        val.last_name.toLocaleLowerCase().includes(args) ||
        val.gender.toLocaleLowerCase().includes(args);
      return rVal;
    });
  }
}
