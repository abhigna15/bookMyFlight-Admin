import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){

  }
  title = 'BookMyFlight';
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  isLoggedin(): boolean{
    if(localStorage.getItem("access_token") && this.currentUser !=null){
      return true;
    }
    return false;
  }
  logout(){
    localStorage.removeItem("access_token");
    this.router.navigateByUrl('login');
  }
}
