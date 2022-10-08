import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../interfaces/Restaurant';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

   private url = 'http://localhost:8080/booking/rest/v1/restaurants';
    static RESTAURANTS : Restaurant[] = [
        { id: 45, name: 'Pizzeria', active : true, address : 'Milano', email : 'allo.pizza@milano.it', phone : '4432154654' },
        { id: 46, name: 'Fast food', active : true, address : 'NewYork', email : 'fast.food@city.nyc', phone : '5554654' },
    ];

    constructor(private http: HttpClient) { }

    getRestaurants(): Observable<Restaurant[]> {
        // const bookings = of(RestaurantService.BOOKINGS);
        // return bookings;
                // const bookings = of(RestaurantService.BOOKINGS);
        // return bookings;
        return this.http.get<Restaurant[]>(this.url);
    }

    getRestaurant(id: number): Observable<Restaurant> {
        const restaurant = RestaurantService.RESTAURANTS.find(restaurant => restaurant.id === id)!
        return of(restaurant);
    }

}
