"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var foodtruck_service_1 = require('../services/foodtruck.service');
var location_service_1 = require('../services/location.service');
var FoodTruckDetailComponent = (function () {
    function FoodTruckDetailComponent(foodTruckService, locationService, route) {
        this.foodTruckService = foodTruckService;
        this.locationService = locationService;
        this.route = route;
        this.today = Date.now();
    }
    FoodTruckDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['foodTruckId'];
            _this.foodTruckService.getFoodTruck(id)
                .subscribe(function (foodtruck) { return _this.foodtruck = foodtruck; });
            _this.locationService.getLocation(id)
                .subscribe(function (location) { return _this.location = location; });
            _this.foodTruckService.getFoodTruckLocations(id)
                .subscribe(function (foodtrucklocations) { return _this.foodtrucklocations = foodtrucklocations; });
        });
    };
    FoodTruckDetailComponent.prototype.setMap = function () {
        console.log("this set map");
        this.lat = this.location.longitude;
        this.long = this.location.latitude;
    };
    // save(): void {
    //   this.foodTruckService.update(this.hero)
    //   .then(this.goBack);
    // }
    FoodTruckDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    FoodTruckDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-foodtruck-detail',
            templateUrl: 'app/foodtruck-details/foodtruck-detail.component.html',
            styleUrls: ['app/foodtruck-details/foodtruck-detail.component.css']
        }), 
        __metadata('design:paramtypes', [foodtruck_service_1.FoodTruckService, location_service_1.LocationService, router_1.ActivatedRoute])
    ], FoodTruckDetailComponent);
    return FoodTruckDetailComponent;
}());
exports.FoodTruckDetailComponent = FoodTruckDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=foodtruck-detail.component.js.map