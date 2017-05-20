export class FoodTruck {
	id: number;
	foodTruckId: number;
	name: string;
	description: string;
	imageUrl: string;
	active: boolean;
	foodTruckCategory: foodTruckCateogry;
	socialUrls: SocialUrls;
	menuItems: MenuItems;
	foodTruckLocations: FoodTruckLocation;
}

export class FoodTruckLocations {
	foodTruckName: string;
	startTime: Date;
	endTime: Date;
	name: string;
	description: string;
	image: string;
	longitude: number;
	latitude: number;
}

export class FoodTruckLocation {
	id: number;
	foodTruckId: number;
	locationId: number;
	startTime: Date;
	endTime: Date;
}

export class foodTruckCateogry {
	id: number;
	foodTruckId: number;
	categoryId: number;
}

export class SocialUrls {
	id: number;
	socialId: number;
	url: string;
	socialNetwork: string;
	foodTruckId: string;
}

export class MenuItems {
	id: number;
	menuId: number;
	itemName: string;
	price: number;
	description: string;
	foodTruckId: number;
}