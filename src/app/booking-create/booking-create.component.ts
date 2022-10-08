import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../interfaces/Booking';
import { Table } from '../interfaces/Table';
import { Restaurant } from '../interfaces/Restaurant';
import { BookingService } from '../services/booking.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
    selector: 'booking-create',
    templateUrl: './booking-create.component.html',
    styleUrls: ['./booking-create.component.css']
})
export class BookingCreateComponent implements OnInit {

    booking: Booking | undefined;
    restaurant : Restaurant | undefined;
    tables: Table[] | undefined;

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
            this.restaurantService.getRestaurant(restaurantId)
                .subscribe(this.fillRestaurant);
            this.tableService.getTables(restaurantId)
                .subscribe(this.fillTables);
        }
    }

    fillRestaurant(restaurant: Restaurant): void {
        this.restaurant = restaurant;
    }

    fillTables(tables : Table[]): void {
        this.tables = tables;
    }

    goBack(): void {
        this.location.back();
    }


    save(): void{
        //Appel du service de sauvegarde de booking

        //récupération du booking.id
        //go vers la fiche du booking
    }

    //@Input() booking?: Booking;
    //@Input() superId?: string;
}
