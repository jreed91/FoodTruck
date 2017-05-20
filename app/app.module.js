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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var homepage_component_1 = require('./homepage/homepage.component');
var foodtruck_component_1 = require('./foodtruck.component');
var foodtruck_detail_component_1 = require('./foodtruck-details/foodtruck-detail.component');
var foodtruck_service_1 = require('./services/foodtruck.service');
var location_service_1 = require('./services/location.service');
var app_routing_1 = require('./app.routing');
var core_2 = require('angular2-google-maps/core');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCxs3vYMwwqrHno5RmJdMd87cqFW6KAzGw'
                }),
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                homepage_component_1.HomePageComponent,
                foodtruck_component_1.FoodTruckComponent,
                foodtruck_detail_component_1.FoodTruckDetailComponent
            ],
            providers: [
                foodtruck_service_1.FoodTruckService,
                location_service_1.LocationService,
                core_2.provideLazyMapsAPILoaderConfig({ apiKey: 'AIzaSyCxs3vYMwwqrHno5RmJdMd87cqFW6KAzGw' })
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map