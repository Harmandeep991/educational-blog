import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AuthComponent } from './auth.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';


const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'register',
    component: AuthComponent
  }
]);

@NgModule({
  imports: [
	  authRouting,
	  CommonModule,
	  FormsModule,
	  ReactiveFormsModule
  ],
  declarations: [
    AuthComponent
  ],

  providers: []
})
export class AuthModule {}