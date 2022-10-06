import { Component, OnInit } from '@angular/core';
import { Booking} from '../interfaces/Booking';
import { BookingService } from '../services/booking.service'

@Component({
    selector: 'booking-list',
    templateUrl: './booking-list.component.html',
    styleUrls: ['./booking-list.component-2.css']
})
export class BookingListComponent implements OnInit {

    bookings: Booking[] = [];
    superName = "coucou";
    selectedBooking?: Booking;

    constructor(private bookingService: BookingService) { }

    ngOnInit(): void {
        this.getBookings();
    }

    getBookings(): void {
        this.bookingService.getBookings().subscribe(
            bookings => this.bookings = bookings);
    }

    onSelect(booking: Booking): void {
        this.selectedBooking = booking;
    }
}
