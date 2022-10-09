import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent} from './booking-detail/booking-detail.component';
import { BookingCreateComponent} from './booking-create/booking-create.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        BookingComponent,
        BookingListComponent,
        BookingCreateComponent,
        BookingDetailComponent,
        RestaurantListComponent,
        RestaurantDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
