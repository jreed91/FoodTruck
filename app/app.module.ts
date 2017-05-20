import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import {HomePageComponent} from './homepage/homepage.component';
import { FoodTruckComponent }  from './foodtruck.component';
import { FoodTruckDetailComponent }  from './foodtruck-details/foodtruck-detail.component';
import { FoodTruckService }  from './services/foodtruck.service';
import { LocationService }  from './services/location.service';
import { routing } from './app.routing';
import { AgmCoreModule, provideLazyMapsAPILoaderConfig } from 'angular2-google-maps/core';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCxs3vYMwwqrHno5RmJdMd87cqFW6KAzGw'
    }),
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    FoodTruckComponent,
    FoodTruckDetailComponent
  ],
  providers: [
    FoodTruckService,
    LocationService,
    provideLazyMapsAPILoaderConfig({ apiKey: 'AIzaSyCxs3vYMwwqrHno5RmJdMd87cqFW6KAzGw' })
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
