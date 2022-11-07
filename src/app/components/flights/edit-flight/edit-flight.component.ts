import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/models/flight.model';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements OnInit {
  flightDetails: Flight = {
  flightId: 0,
  flightName: '',
  seatCount: 0
};

  constructor(private route: ActivatedRoute, private flightService: FlightsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const flightId = params.get('flightId'); 

        if(flightId){
          //call api
          this.flightService.getFlight(flightId)
          .subscribe({
            next: (response) => {
              this.flightDetails = response;
            }
          });
        }
      }
    })
  }

  updateFlight(){
    this.flightService.updateFlight(this.flightDetails.flightId, this.flightDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate([ 'flights' ]);
      }
    });
  }

  deleteFlight(flightId: number) {
    this.flightService.deleteFlight(flightId)
    .subscribe({
      next: (response) => {
        this.router.navigate(['flights']);
      }
    });
  }
}
