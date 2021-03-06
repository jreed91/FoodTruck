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
var HomePageComponent = (function () {
    function HomePageComponent(router, foodTruckService) {
        this.router = router;
        this.foodTruckService = foodTruckService;
        this.title = 'QCFoodTruckMap';
    }
    HomePageComponent.prototype.getFoodTrucks = function () {
        var _this = this;
        this.foodTruckService.getFoodTrucks().subscribe(function (foodtrucks) { return _this.foodtrucks = foodtrucks; });
    };
    HomePageComponent.prototype.ngOnInit = function () {
        this.getFoodTrucks();
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'homepage',
            templateUrl: 'app/homepage/homepage.component.html',
            styleUrls: ['app/homepage/homepage.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, foodtruck_service_1.FoodTruckService])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=homepage.component.js.map