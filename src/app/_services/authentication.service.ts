// import { JwtHelper, tokenNotExpired} from 'angular2-jwt';
import { Customer } from './../customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Customer } from '../customer';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
private REST_API_SERVER = 'http://localhost:3000/login';

private currentUserSubject: BehaviorSubject<Customer>;
public currentUser: Observable<Customer>;
constructor(private httpClient: HttpClient) {
this.currentUserSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem("currentUser")));
this.currentUser = this.currentUserSubject.asObservable();
}
public get currentUserValue(): Customer {
return this.currentUserSubject.value;
}
public login(email: string, passwd: string) {
return this.httpClient.post<any>(this.REST_API_SERVER, { email, passwd })
.pipe(map(customer => {
if ( customer) {
    console.log("inside authenticationservice"+ customer);
// store user details in local storage to keep user logged in
localStorage.setItem("currentUser", JSON.stringify(customer));
this.currentUserSubject.next(customer);
}
return customer;
}));
}
logout() {
// remove user data from local storage for log out
localStorage.removeItem("currentUser");
this.currentUserSubject.next(null);
}
// public isLoggedIn(){
    // return tokenNotExpired();

}
