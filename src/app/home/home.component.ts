import { AuthenticationService } from './../_services/authentication.service';
import { Customer } from './../customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

    public currentUser;
    customers = []; // blank array
    displayedColumns: string[] = ['id', 'username', 'email', 'passwd', 'state', 'city', 'edit', 'delete'];
    selectedCustomer : Customer = new Customer();
    constructor(private dataService: DataService,
      private router: Router,
      private authenticationService: AuthenticationService)
     {
       
      console.log("inside home",localStorage.getItem("currentUser"));
      this.currentUser = localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")) : '';
      console.log("inside home",this.currentUser);
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      console.log("CurrentUser="+ this.currentUser);
     }
     logout() {
      this.authenticationService.logout();
      this.router.navigate(['login']);
      
      }
    //  public isLoggedIn(){
        // this.authenticationService.isLoggedIn();
      
   ngOnInit() {

     this.dataService.sendGetRequest().subscribe((data: any[]) => {
       console.log(data);
       this.customers = data;
      });
   }

  public deleteCustomer(customer: { id: number; }) {
    if (confirm('Are you sure you want to delete the customer . This cannot be undone')) {
      this.dataService.sendDeleteRequest(customer.id).subscribe((data: any[]) => {
       alert(data);
      });
    }
  }

  // tslint:disable-next-line: variable-name
  public editCustomer(customer: Customer) {
    // console.log('editt');
    this.selectedCustomer = new Customer();
    this.selectedCustomer.id=customer.id;
    this.selectedCustomer.username=customer.username;
    this.selectedCustomer.passwd=customer.passwd;
    this.selectedCustomer.email=customer.email;

  }
  editSelectedCustomer(customer: Customer ) {
    // call the service and from there rest api
    this.dataService.sendUpdateRequest(customer).subscribe((data: any[]) => {
      alert("Customer updated successfully!");
     });
}

}
