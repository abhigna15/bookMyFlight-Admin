import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trip } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  headers:HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer  ${localStorage.getItem("access_token")}'
  });
  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getAllTrips() : Observable<Trip[]>{
    return this.http.get<Trip[]>(this.baseApiUrl + '/api/Trips',{headers: this.headers});
  }

  addTrip(addTripRequest: Trip): Observable <Trip> {
    return this.http.post<Trip>(this.baseApiUrl + '/api/Trips', addTripRequest,{headers: this.headers});
  }

  getTrip(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseApiUrl + '/api/Trips/',{headers: this.headers});
  }

  updateTrip(Id: number, updateTripRequest: Trip): Observable <Trip> {
    return this.http.put<Trip>(this.baseApiUrl + '/api/Trips/' + Id, updateTripRequest,{headers: this.headers});
  }

  deleteTrip(Id: number): Observable <Trip> {
    return this.http.delete<Trip>(this.baseApiUrl + '/api/Trips/' + Id,{headers: this.headers});
  }

}