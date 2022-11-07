import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddFlightComponent } from './components/flights/add-flight/add-flight.component';
import { AddTripComponent } from './components/flights/add-trip/add-trip.component';
import { EditFlightComponent } from './components/flights/edit-flight/edit-flight.component';
import { FlightsListComponent } from './components/flights/flights-list/flights-list.component';
import { TripsListComponent } from './components/flights/trips-list/trips-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: 'flights',
    component: FlightsListComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'flights/add',
    component: AddFlightComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'flights/edit/:flightId',
    component: EditFlightComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'flights/trips',
    component: TripsListComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'flights/addTrip',
    component: AddTripComponent,
    canActivate:[AuthGuard]
  },

  {
    path:'login',
    component:LoginComponent
  },   
  {
    path: '',
    redirectTo:'login',
    pathMatch:'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
