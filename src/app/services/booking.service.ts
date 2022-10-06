import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from '../interfaces/Booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookingService {

   private url = 'http://localhost:8080/booking/rest/v1/restaurants';
    static BOOKINGS: Booking[] = [
        { id: 45, name: 'Booking at table 1' },
        { id: 99, name: 'Booking on evening' }
    ];

    constructor(private http: HttpClient) { }

    getBookings(): Observable<Booking[]> {
        // const bookings = of(BookingService.BOOKINGS);
        // return bookings;
                // const bookings = of(BookingService.BOOKINGS);
        // return bookings;
        return this.http.get<Booking[]>(this.url);
    }

    getBooking(id: number): Observable<Booking> {
        const booking = BookingService.BOOKINGS.find(booking => booking.id === id)!
        return of(booking);
    }

}
