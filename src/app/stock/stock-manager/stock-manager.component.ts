import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {

  private stocks:Array<Stock>

  constructor() { }

  ngOnInit() {

    this.stocks = [

      new Stock(1,"数据一",12,5,'第一条测试数据',['aaa','nnn']),
      new Stock(2,"数据二",11,4,'第二条测试数据',['aaa','nnn']),
      new Stock(3,"数据三",10,3,'第三条测试数据',['aaa','nnn']),
    ]
  }

}

export class Stock{

  constructor(
    public id:number,
    public name:string,
    public price:number,
    public rating:number,
    public desc:string,
    public types:Array<string>
  ){

  }

}
