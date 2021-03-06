import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StockManagerComponent } from './stock/stock-manager/stock-manager.component';
import { StockFilterPipe } from './stock/stock-filter.pipe';
import { Routes, RouterModule } from '@angular/router';
import { DoshboardComponent } from './doshboard/doshboard.component';
import { AddStockComponent } from './stock/add-stock/add-stock.component';
import { StarRatingModule } from 'angular-star-rating';
import { UpdateStockComponent } from './stock/update-stock/update-stock.component';


const routeConfig: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DoshboardComponent },
  { path: 'stock', component: StockManagerComponent },
  { path: 'addStock', component: AddStockComponent},
  { path: 'updateStock/:name/:price/:stars', component: UpdateStockComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManagerComponent,
    StockFilterPipe,
    DoshboardComponent,
    AddStockComponent,
    UpdateStockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
