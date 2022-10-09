import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from '../interfaces/Booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BookingService {

    private url = 'http://localhost:8080/booking/rest/v1/bookings';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private postCountLocalStorateKey = "postCount";
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
        return this.http.get<Booking>(this.url+ "/" + id);
        //const booking = BookingService.BOOKINGS.find(booking => booking.id === id)!
        //return of(booking);
    }

    updateBooking(booking: Booking): Observable<Booking> {
        let postCount = localStorage.getItem(this.postCountLocalStorateKey);
        if(!postCount){
            postCount = "0";
        }
        localStorage.setItem(this.postCountLocalStorateKey, String(Number(postCount)+1));
        console.info(localStorage.getItem(this.postCountLocalStorateKey));
        return this.http.post(this.url, booking, this.httpOptions)
    }

}
