import { Component, OnInit } from '@angular/core';
import { Booking} from '../interfaces/Booking'

@Component({
    selector: 'booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    booking: Booking= {
        id: 1,
        name: 'My first booking'
    }

}
