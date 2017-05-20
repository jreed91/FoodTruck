import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FoodTruck } from './classes/foodtruck';
import { FoodTruckService } from './services/foodtruck.service';

@Component({
  selector: 'my-foodtrucks',
  templateUrl: 'app/foodtruck.component.html',
  styleUrls:  ['app/foodtruck.component.css']
})
export class FoodTruckComponent implements OnInit {
  foodtrucks: FoodTruck[];
  selectedFoodTruck: FoodTruck;
  lat: number = 51.678418;
  lng: number = 7.809007;

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

  onSelect(foodtruck: FoodTruck): void {
    this.selectedFoodTruck = foodtruck;
  }

  gotoDetail(): void {
    this.router.navigate(['/foodtrucks', this.selectedFoodTruck.foodTruckId]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.foodTruckService.create(name)
      .subscribe(foodtruck => {
        this.foodtrucks.push(foodtruck);
        this.selectedFoodTruck = null
      });
  }

  // delete(hero: Hero): void {
  // this.heroService
  //     .delete(hero.id)
  //     .then(() => {
  //       this.heroes = this.heroes.filter(h => h !== hero);
  //       if (this.selectedHero === hero) { this.selectedHero = null; }
  //     });
}