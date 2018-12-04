import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private menus: Array<menu>;

  constructor(public router: Router) { }
  clickNumber:number;

  ngOnInit() {

    this.menus = [

      new menu(1, "Dashboard", 'dashboard'),
      new menu(2, "Stock", 'stock')

    ]
  }

  nav(menuInput: menu) {
    this.router.navigateByUrl(menuInput.url);
    this.clickNumber = menuInput.id;
  }

}

export class menu {

  constructor(
    public id: number,
    public name: string,
    public url: any
  ) {

  }

}
