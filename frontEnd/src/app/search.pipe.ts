import { Pipe, PipeTransform } from '@angular/core';
// import {isNullOrUndefined} from 'util';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,searchName:string): any {
   // searchName = searchName.trim();
    if(searchName.trim()==="" )
    return value;
      const itemsArray:any[]=[];
      for(let i =0;i<value.length;i++)
      {
        let itemName:string=value[i].itemName;
        if((itemName.toLowerCase()).includes(searchName.toLowerCase()))
        itemsArray.push(value[i]);
      }
      return itemsArray;
  }

}
