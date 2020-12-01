import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HardCodedAuthenticationServiceService } from '../hard-coded-authentication-service.service';
import { DataService } from '../data.service';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/userservice.service';

@Component({
   selector: 'auth-page',
   templateUrl: './auth.component.html',
   styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   authType: any = '';
   title: String = '';
   isSubmitting = false;
   authForm: FormGroup;
   invalidLogin = false;

   loginForm: FormGroup;
   loading = false;
   submitted = false;
   returnUrl: string;

   constructor(
     private route: ActivatedRoute,
     private fb: FormBuilder,
    //  private route: ActivatedRoute,
     private router: Router,
     private hardcodedauthenticatinservice: HardCodedAuthenticationServiceService,
     private dataservice: DataService,
     private authenticationService: AuthenticationService,
     private userService: UserService
   ) {
     // use FormBuilder to create a form group
     this.authForm = this.fb.group({
       email1: new FormControl('', Validators.required),
       password: new FormControl('', Validators.required),
     });
   }

   get email1() { return this.authForm.get('email1'); }
   get password() { return this.authForm.get('password'); }
   get username() { return this.authForm.get('username'); }
   ngOnInit() {
     this.route.url.subscribe(data => {
       // Get the last piece of the URL (it's either 'login' or 'register')
       this.authType = data[data.length - 1].path;
       // Set a title for the page accordingly
       this.title = (this.authType === 'login') ? 'Sign In' : 'Sign Up';
       // add form control for username if this is the register page
       if (this.authType === 'register') {
         this.authForm.addControl('username', new FormControl('',Validators.required));
       }
     });
   }
   get fval() { return this.authForm.controls; }
   submitForm() {
     console.log('here--', this.email1);
    //  return false;
     this.isSubmitting = true;
     console.log('hi' + this.authType);
     if (this.authType === 'register') {
      console.log('hello' + this.authType);
      const user = {
        username : this.username.value,
        passwd : this.password.value,
        email : this.email1.value
      };
      this.dataservice.sendPostRequest(user).subscribe(success => function() {
          alert('done');
          this.router.navigate(['register']);
        },
        error => (alert('error'))
        );
    }
    //   this.dataservice.sendPostRequest(userData).subscribe((data: any[])=>{
    //    console.log(data);
    //   }) ;
    //  }


     // let credentials = this.authForm.value;
     // check out what you get!
     console.log(this.email1.value);
    //  if(this.email1.value === "harman" && this.password.value === "harman"){
    //   this.router.navigate(['welcome']);
    //    this.invalidLogin = false
    //  }
    //  else{
    //    this.invalidLogin = true
    //  }
    
    if (this.authType === 'login'){
this.loading = true;
this.authenticationService.login(this.email1.value, this.password.value).subscribe((data: any[]) => {
console.log(data.length);
if (data.length !== 0) {
 this.invalidLogin = false;
 let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl');
this.router.navigate([returnUrl || 'home']);
} else {
  alert('invalid username or password');
  this.invalidLogin = true;
   }
// error => {
// console.log(error);
// this.loading = false;

    //  if (this.authType === 'login') {
    //     const user =  {
    //                     passwd : this.password.value,
    //                     email : this.email1.value
    //                   };

    //     this.hardcodedauthenticatinservice.authenticate(user).subscribe((data: any[]) => {
    //       console.log(data.length);
    //       if (data.length !== 0) {
    //         this.invalidLogin = false;
    //         this.router.navigate(['home']);
    //       } else {
    //         alert('invalid username or password');
    //         this.invalidLogin = true;
    //       }


        });}
      // // tslint:disable-next-line: deprecation
      //   if (this.hardcodedauthenticatinservice.authenticate(user).subscribe) {
      //   // this.router.navigate(['welcome']);
      //   this.invalidLogin = false;
      // } else {
      //     this.invalidLogin = true;
      //   // this.router.navigate(['login']);
      // }
    }
   }
  //}
