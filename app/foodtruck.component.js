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
var foodtruck_service_1 = require('./services/foodtruck.service');
var FoodTruckComponent = (function () {
    function FoodTruckComponent(router, foodTruckService) {
        this.router = router;
        this.foodTruckService = foodTruckService;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    FoodTruckComponent.prototype.getFoodTrucks = function () {
        var _this = this;
        this.foodTruckService.getFoodTrucks().subscribe(function (foodtrucks) { return _this.foodtrucks = foodtrucks; });
    };
    FoodTruckComponent.prototype.ngOnInit = function () {
        this.getFoodTrucks();
    };
    FoodTruckComponent.prototype.onSelect = function (foodtruck) {
        this.selectedFoodTruck = foodtruck;
    };
    FoodTruckComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/foodtrucks', this.selectedFoodTruck.foodTruckId]);
    };
    FoodTruckComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.foodTruckService.create(name)
            .subscribe(function (foodtruck) {
            _this.foodtrucks.push(foodtruck);
            _this.selectedFoodTruck = null;
        });
    };
    FoodTruckComponent = __decorate([
        core_1.Component({
            selector: 'my-foodtrucks',
            templateUrl: 'app/foodtruck.component.html',
            styleUrls: ['app/foodtruck.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, foodtruck_service_1.FoodTruckService])
    ], FoodTruckComponent);
    return FoodTruckComponent;
}());
exports.FoodTruckComponent = FoodTruckComponent;
//# sourceMappingURL=foodtruck.component.js.map