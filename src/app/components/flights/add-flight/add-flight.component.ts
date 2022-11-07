import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight.model';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  addFlightRequest: Flight = {
    flightId: 0,
    flightName: '',
    seatCount: 0
  }
  constructor(private flightService: FlightsService, private router: Router) { 
  }

  ngOnInit(): void { }

  addFlight(){
    this.flightService.addFlight(this.addFlightRequest)
    .subscribe({
      next: (flight) => {
        this.router.navigate([ 'flights' ]);
      }
    })
  }

}
