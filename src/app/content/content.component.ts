import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter'
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle:String = '';
  pageDesc:String = '';

  constructor(public router: Router) {

    router.events.filter(event => event instanceof NavigationEnd)
    .subscribe((event:NavigationEnd) => {

      if(event.url == '/dashboard'){
        this.pageTitle = 'Dashboard';
        this.pageDesc = 'Dashboard desc';
      }else if(event.url == '/stock'){
        this.pageTitle = 'Stock';
        this.pageDesc = 'Stock desc';
      }else if(event.url = '/addStock'){
        this.pageTitle = 'add';
        this.pageDesc = 'add desc';
      }
      
    })
   }

  ngOnInit() {
  }

}
