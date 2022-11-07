import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/flight.model';
import { Router } from '@angular/router';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  addTripRequest: Trip = {
    id: 0,
    routeName: '',
    sourceTime : '',
    destinationTime : '',
    passengerCount: 0,
    price: 0,
    flight_Id: 0,
    tripRoute_Id : 1
  }
  
  constructor(private tripService: TripsService, private router: Router) { 
  }

  ngOnInit(): void { }

  addTrip(){
    this.tripService.addTrip(this.addTripRequest)
    .subscribe({
      next: (trip) => {
        this.router.navigate([ 'flights/trips' ]);
      }
    })
  }

}
