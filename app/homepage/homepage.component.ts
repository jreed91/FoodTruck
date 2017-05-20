import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FoodTruck } from '../classes/foodtruck';
import { FoodTruckService } from '../services/foodtruck.service';

@Component({
  selector: 'homepage',
  templateUrl: 'app/homepage/homepage.component.html',
  styleUrls: ['app/homepage/homepage.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'QCFoodTruckMap';
  foodtrucks: FoodTruck[];
  selectedFoodTruck: FoodTruck;

  constructor(
    private router: Router,
    private foodTruckService: FoodTruckService) { }


  getFoodTrucks(): void {
    this.foodTruckService.getFoodTrucks().subscribe(
                       foodtrucks => this.foodtrucks = foodtrucks)
  }


  ngOnInit(): void {
    this.getFoodTrucks();
  }
}
