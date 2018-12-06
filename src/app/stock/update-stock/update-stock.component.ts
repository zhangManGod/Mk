import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  showName:String = '';
  showPrice:number = 0;
  showRoting:number = 1;

  ngOnInit() {

    this.showName = this.route.snapshot.params["name"];
    this.showPrice = this.route.snapshot.params["price"];
    this.showRoting = this.route.snapshot.params["stars"];
  }

}
