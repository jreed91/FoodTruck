import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { FoodTruck } from '../classes/foodtruck';
import { FoodTruckLocations } from '../classes/foodtruck';
import { Location } from '../classes/location';

import { FoodTruckService } from '../services/foodtruck.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'my-foodtruck-detail',
  templateUrl: 'app/foodtruck-details/foodtruck-detail.component.html',
  styleUrls: ['app/foodtruck-details/foodtruck-detail.component.css']
})
export class FoodTruckDetailComponent implements OnInit {
  foodtruck: FoodTruck;
  location: Location;
  foodtrucklocations: FoodTruckLocations;
  lat: number;
  long: number;
  today: number = Date.now();

  constructor(
    private foodTruckService: FoodTruckService,
    private locationService: LocationService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['foodTruckId'];
      this.foodTruckService.getFoodTruck(id)
        .subscribe(foodtruck => this.foodtruck = foodtruck);
      this.locationService.getLocation(id)
        .subscribe(location => this.location = location);  
      this.foodTruckService.getFoodTruckLocations(id)
        .subscribe(foodtrucklocations => this.foodtrucklocations = foodtrucklocations);
    });

  }


  setMap(): void {
    console.log("this set map");
    this.lat = this.location.longitude;
    this.long = this.location.latitude;
  }
  // save(): void {
  //   this.foodTruckService.update(this.hero)
  //   .then(this.goBack);
  // }
  goBack(): void {
    window.history.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/