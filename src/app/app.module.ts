import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsListComponent } from './components/flights/flights-list/flights-list.component';
import { AddFlightComponent } from './components/flights/add-flight/add-flight.component';
import { FormsModule } from '@angular/forms';
import { EditFlightComponent } from './components/flights/edit-flight/edit-flight.component';
import { TripsListComponent } from './components/flights/trips-list/trips-list.component';
import { AddTripComponent } from './components/flights/add-trip/add-trip.component';

import {CookieService} from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    FlightsListComponent,
    AddFlightComponent,
    EditFlightComponent,
    TripsListComponent,
    AddTripComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5054"],
        disallowedRoutes: []
      }
    }),
  ],
  providers: [ AuthService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
