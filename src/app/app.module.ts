import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { MainComponent } from './main/main.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LastFewTransactionsComponent,
    MainComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent,
    SideNavComponent,
    TopThreeProductsComponent,
    TopWidgetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HighchartsChartModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
