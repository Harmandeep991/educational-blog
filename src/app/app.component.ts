import { Customer } from './customer';
import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  currentUser: Customer;
  
constructor(
  private router: Router,
  private authenticationService: AuthenticationService
  ) {
  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  console.log("CurrentUser="+ this.currentUser);
  }
   
  logout() {
  this.authenticationService.logout();
  this.router.navigate(['login']);
  
  }
}



// import { User } from './_models/user';

 



 
 
