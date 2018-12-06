import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  constructor(public routers:Router) { }

  ngOnInit() {
  }

  returnStock(){

    this.routers.navigateByUrl('stock');

  }

  getColor(rating: number, numOfStars: number, staticColor: string): string {
    console.log('getColor rating: ', rating, 'numOfStars: ', numOfStars, 'staticColor: ', staticColor);
    let colors = ['default', 'negative', 'ok', 'positive'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

}
