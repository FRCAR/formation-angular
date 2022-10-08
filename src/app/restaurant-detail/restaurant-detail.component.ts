import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../interfaces/Restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
    selector: 'restaurant-detail',
    templateUrl: './restaurant-detail.component.html',
    styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

    @Input() restaurant: Restaurant | undefined;

    constructor(
        private route: ActivatedRoute,
        private restaurantService: RestaurantService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getRestaurant();
    }

    getRestaurant(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.restaurantService.getRestaurant(id)
            .subscribe(this.fillRestaurant);
    }

    fillRestaurant(restaurant: Restaurant): void {
        this.restaurant = restaurant;
        console.log(restaurant?.name);
    }

    goBack(): void {
        this.location.back();
    }

}
