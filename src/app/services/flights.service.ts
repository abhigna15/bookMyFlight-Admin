import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  headers:HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer  ${localStorage.getItem("access_token")}'
  });

  getAllFlights() : Observable<Flight[]>{
    return this.http.get<Flight[]>(this.baseApiUrl + '/api/Flights',{headers: this.headers})
  }

  addFlight(addFlightRequest: Flight): Observable <Flight> {
    return this.http.post<Flight>(this.baseApiUrl + '/api/Flights', addFlightRequest,{headers: this.headers});
  }

  getFlight(flightId: string): Observable<Flight> {
    return this.http.get<Flight>(this.baseApiUrl + '/api/flights/' + flightId,{headers: this.headers});
  }

  updateFlight(flightId: number, updateFlightRequest: Flight): Observable <Flight> {
    return this.http.put<Flight>(this.baseApiUrl + '/api/flights/' + flightId, updateFlightRequest,{headers: this.headers});
  }

  deleteFlight(flightId: number): Observable <Flight> {
    return this.http.delete<Flight>(this.baseApiUrl + '/api/flights/' + flightId,{headers: this.headers});
  }

}