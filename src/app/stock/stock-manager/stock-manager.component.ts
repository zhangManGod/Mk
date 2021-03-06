import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {

  private stocks:Array<Stock>

  constructor(public router: Router) { }

  ngOnInit() {

    this.stocks = [

      new Stock(1,"数据一",12,5,'第一条测试数据',['aaa','nnn']),
      new Stock(2,"数据二",11,4,'第二条测试数据',['aaa','nnn']),
      new Stock(3,"数据三",10,3,'第三条测试数据',['aaa','nnn']),
    ]
  }

  addStock(){

    this.router.navigateByUrl('addStock')

  }

  update(stock:Stock){

    this.router.navigateByUrl(`updateStock/${stock.name}/${stock.price}/${stock.rating}`)

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