import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../interfaces/Booking';
import { Table } from '../interfaces/Table';
import { Restaurant } from '../interfaces/Restaurant';
import { BookingService } from '../services/booking.service';
import { RestaurantService } from '../services/restaurant.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'booking-create',
    templateUrl: './booking-create.component.html',
    styleUrls: ['./booking-create.component.css']
})
export class BookingCreateComponent implements OnInit {

    booking: Booking = {};
    restaurant?: Restaurant;
    tables: Table[] = [];

    constructor(
        private route: ActivatedRoute,
        private bookingService: BookingService,
        private restaurantService: RestaurantService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getBooking();
    }

    getBooking(): void {
        const restaurantId = Number(this.route.snapshot.queryParamMap.get('restaurantId'));
        if (restaurantId) {
            this.restaurantService.getRestaurant(restaurantId).subscribe(restaurant=> this.restaurant = restaurant);
            this.restaurantService.getTables(restaurantId).subscribe(tables => this.tables = tables);
        }
    }

    fillBooking(booking: Booking): void {
        this.booking = booking;
    }

    goBack(): void {
        this.location.back();
    }


    save(): void {
        this.bookingService.updateBooking(this.booking)
            .subscribe(booking => this.booking = booking);
    }

}
