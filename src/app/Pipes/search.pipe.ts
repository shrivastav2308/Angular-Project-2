import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search: any){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  }

}
