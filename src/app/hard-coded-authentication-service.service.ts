import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationServiceService {
private REST_API_SERVER = 'http://localhost:3000/login';
   constructor(private httpClient: HttpClient) { }

  public authenticate(user) {
    console.log('inside function', user);
    return this.httpClient.post(this.REST_API_SERVER, user);
    // // if(email === "harman" && password === "harman") {
    //   return true;+++++++++++++++++++
    // } else {
    //   return false;
    // }
  }
}
