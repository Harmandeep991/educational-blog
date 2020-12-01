import { Customer } from './../customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Customer } from '../_models/user';
@Injectable({ providedIn: 'root' })
export class UserService {
constructor(private http: HttpClient) { }
register(customer: Customer) {
return this.http.post(`auth/register`, customer);
}
}