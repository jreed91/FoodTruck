"use strict";
var router_1 = require('@angular/router');
var foodtruck_component_1 = require('./foodtruck.component');
var foodtruck_detail_component_1 = require('./foodtruck-details/foodtruck-detail.component');
var homepage_component_1 = require('./homepage/homepage.component');
var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        component: homepage_component_1.HomePageComponent
    },
    {
        path: 'foodtrucks',
        component: foodtruck_component_1.FoodTruckComponent
    },
    {
        path: 'foodtrucks/:foodTruckId',
        component: foodtruck_detail_component_1.FoodTruckDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map