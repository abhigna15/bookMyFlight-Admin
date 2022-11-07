import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private cookieService:CookieService) { }
  
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  baseApiUrl = "http://localhost:5054/api";

  jwtHelperService = new JwtHelperService();

  loginUser(loginInf : Array<String>){
    return this.http.post(this.baseApiUrl+"/AdminLogin",{
      Name:loginInf[0],
      Email:loginInf[1],
      AdminPassword:loginInf[2]
    },{
      responseType:'text',
    });
  }

  setToken(token: string){
    localStorage.setItem("access_token",token);
    this.lodCurrentUser();
  }

  lodCurrentUser(){
      const token = localStorage.getItem("access_token");
      const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;
      const data = userInfo ?{
        ID : userInfo.ID,
        Name : userInfo.Name,
        Email : userInfo.Email
      }:null;
      this.currentUser.next(data);
  }

  isLoggedin(): boolean{
    if(localStorage.getItem("access_token") && this.currentUser !=null){
      return true;
    }
    return false;
  }

  deleteCookie(){
    this.cookieService.delete('Cookie');
  }
   
  removeToken(){
    localStorage.removeItem("access_token");
  }
}
