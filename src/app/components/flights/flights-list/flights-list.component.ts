import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  flights: Flight[] = [
    //{ FlightID: 101, FlightName: 'AirIndia', SeatCount: 90, FlightPrice: 500 }
  ];
  
  constructor(private flightsService: FlightsService) { }

  printFlightListFunction (){
    this.flightsService.getAllFlights()
    .subscribe({
      next: (flights) => { this.flights=flights; console.log(flights);},
      
      error: (response) => { console.log(response); } 
    })
  }

  ngOnInit(): void {
    this.printFlightListFunction();
  }
  
}
