import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/booking-list', pathMatch: 'full' },
    { path: 'booking-list', component: BookingListComponent },
    { path: 'restaurant-list', component: RestaurantListComponent },
    { path: 'booking/:id', component: BookingDetailComponent },
    { path: 'booking', component: BookingDetailComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
