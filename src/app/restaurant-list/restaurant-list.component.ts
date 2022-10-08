import { Component, OnInit } from '@angular/core';
import { Restaurant} from '../interfaces/Restaurant';
import { RestaurantService } from '../services/restaurant.service'

@Component({
    selector: 'restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

    restaurants: Restaurant[] = [];
    superName = "coucou";
    selectedrestaurant?: Restaurant;

    constructor(private restaurantService: RestaurantService) { }

    ngOnInit(): void {
        this.getrestaurants();
    }

    getrestaurants(): void {
        this.restaurantService.getRestaurants().subscribe(
            restaurants => this.restaurants = restaurants);
    }

    onSelect(restaurant: Restaurant): void {
        this.selectedrestaurant = restaurant;
    }
}
