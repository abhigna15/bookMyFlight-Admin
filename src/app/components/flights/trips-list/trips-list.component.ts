import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/flight.model';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {
  
  trips: Trip[] = [];
  
  constructor(private tripsService: TripsService) { }

  printTripListFunction (){
    this.tripsService.getTrip()
    .subscribe({
      next: (trips) => { this.trips=trips; console.log(this.trips); 
    },
      
      error: (response) => { console.log(response); } 
    })
  }

  ngOnInit(): void {
    this.printTripListFunction();
  }

}
