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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/toPromise');
var FoodTruckService = (function () {
    function FoodTruckService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.foodTruckUrl = 'http://foodtrucksapi20160905125504.azurewebsites.net/api/foodtruck/'; // URL to web api
    }
    FoodTruckService.prototype.getFoodTrucks = function () {
        return this.http.get(this.foodTruckUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FoodTruckService.prototype.getFoodTruck = function (id) {
        return this.http.get(this.foodTruckUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FoodTruckService.prototype.getFoodTruckLocations = function (id) {
        return this.http.get(this.foodTruckUrl + id + "/locations")
            .map(this.extractData)
            .catch(this.handleError);
    };
    // update(hero: FoodTruck): Promise<FoodTruck> {
    //  		const url = `${this.heroesUrl}/${hero.id}`;
    //  		return this.http
    //     .put(url, JSON.stringify(hero), {headers: this.headers})
    //     .toPromise()
    //     .then(() => hero)
    //     .catch(this.handleError);
    // }
    FoodTruckService.prototype.create = function (name) {
        return this.http
            .post(this.foodTruckUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    //  	delete(id: number): Promise<void> {
    //   let url = `${this.heroesUrl}/${id}`;
    //   return this.http.delete(url, {headers: this.headers})
    //     .toPromise()
    //     .then(() => null)
    //     .catch(this.handleError);
    // }
    FoodTruckService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body || {});
        return body || {};
    };
    FoodTruckService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    FoodTruckService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FoodTruckService);
    return FoodTruckService;
}());
exports.FoodTruckService = FoodTruckService;
//# sourceMappingURL=foodtruck.service.js.map