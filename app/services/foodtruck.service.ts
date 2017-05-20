import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { FoodTruck } from '../classes/foodtruck';
import { FoodTruckLocations } from '../classes/foodtruck';

@Injectable()
export class FoodTruckService {

	private headers = new Headers({'Content-Type': 'application/json'});
  	private foodTruckUrl = 'http://foodtrucksapi20160905125504.azurewebsites.net/api/foodtruck/';  // URL to web api

  	constructor(private http: Http) { }


	getFoodTrucks(): Observable<FoodTruck[]> {
    	return this.http.get(this.foodTruckUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  	}

  	getFoodTruck(id: number): Observable<FoodTruck> {
		return this.http.get(this.foodTruckUrl + id)
			.map(this.extractData)
			.catch(this.handleError);
	}

	getFoodTruckLocations(id: number): Observable<FoodTruckLocations> {
		return this.http.get(this.foodTruckUrl + id + "/locations")
			.map(this.extractData)
			.catch(this.handleError);
	}





	// update(hero: FoodTruck): Promise<FoodTruck> {
 //  		const url = `${this.heroesUrl}/${hero.id}`;
 //  		return this.http
	//     .put(url, JSON.stringify(hero), {headers: this.headers})
	//     .toPromise()
	//     .then(() => hero)
	//     .catch(this.handleError);
	// }

	create(name: string): Observable<FoodTruck> {
	    return this.http
	      .post(this.foodTruckUrl, JSON.stringify({name: name}), {headers: this.headers})
	      .map(this.extractData)
	      .catch(this.handleError);
	  }

 //  	delete(id: number): Promise<void> {
	//   let url = `${this.heroesUrl}/${id}`;
	//   return this.http.delete(url, {headers: this.headers})
	//     .toPromise()
	//     .then(() => null)
	//     .catch(this.handleError);
	// }

  	private extractData(res: Response) {
    	let body = res.json();
    	console.log(body || { });
    	return body || { };
  	}


	private handleError (error: any) {
	    // In a real world app, we might use a remote logging infrastructure
	    // We'd also dig deeper into the error to get a better message
	    let errMsg = (error.message) ? error.message :
	      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	    console.error(errMsg); // log to console instead
	    return Observable.throw(errMsg);
 	}
}