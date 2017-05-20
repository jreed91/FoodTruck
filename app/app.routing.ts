import {Routes, RouterModule } from '@angular/router';

import { FoodTruckComponent } from './foodtruck.component';
import { FoodTruckDetailComponent } from './foodtruck-details/foodtruck-detail.component';
import {HomePageComponent} from './homepage/homepage.component';

const appRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomePageComponent
	},
	{
		path: 'foodtrucks',
		component: FoodTruckComponent
	},
	{
		path: 'foodtrucks/:foodTruckId',
		component: FoodTruckDetailComponent
	}
];

export const routing = RouterModule.forRoot(appRoutes);