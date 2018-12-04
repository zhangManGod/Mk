import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  returnData:any;
  datas = {
    "name1": "001",
    "name2": "Eurasian Collared-Dove",
    "name3": "Dove",
    "name4": "Streptopelia",
    "name5":"afasdfasdfasdfasdfasdfasdfdsafdasf",
    "name6":"adfasdgasdf",
    "name7":"werwetwet",
    "name8":"adfzdfe",
    "name9":"erteterer",
    "name10":"adfsdfsdf",
    "name11":"efasdfdfsdf"
};

  transform(value: any, args?: any): any {

    this.returnData = null;

    return this.datas[value];

  }

}
