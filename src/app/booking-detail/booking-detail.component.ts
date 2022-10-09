import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../interfaces/Booking';
import { Table} from '../interfaces/Table';
import { BookingService } from '../services/booking.service';

@Component({
    selector: 'booking-detail',
    templateUrl: './booking-detail.component.html',
    styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

    booking: Booking | undefined;
    tables: Table[] | undefined;

    constructor(
        private route: ActivatedRoute,
        private bookingService: BookingService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getBooking();
    }

    getBooking(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if(id){
            this.bookingService.getBooking(id)
                .subscribe(this.fillBooking);
        }else{
            this.booking = {}; 
        }

    }

    fillBooking(booking : Booking): void{
        this.booking = booking;
    }

    goBack(): void {
        this.location.back();
    }

    //@Input() booking?: Booking;
    //@Input() superId?: string;
}
