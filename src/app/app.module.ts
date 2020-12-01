import { HttpInterceptor} from "@angular/common/http";
import { InterceptorService } from './_services/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatDividerModule } from '@angular/material/divider';
import { UploadContentComponent } from './upload-content/upload-content.component';
import { LikeComponent } from './like/like.component';
import { AuthGuard } from './_helpers/authguard';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzComponent } from './quizz/quizz.component';
const routes: Routes = [
 
  {path:"", redirectTo:"/login", pathMatch:"full"},
  // {path:"", component:HomeComponent,canActivate:[AuthGuard]},
  {path:"home", component:HomeComponent,canActivate:[AuthGuard]},
  {path:"about", component:AboutComponent},
  {path:"welcome", component: WelcomeComponent},
  {path:"upload-content", component: UploadContentComponent},
  {path:"like", component: LikeComponent},
  {path:"quiz", component: QuizComponent},
  {path:"quizz", component: QuizzComponent},

];
const firebaseConfig = {
  apiKey: "AIzaSyBz6AOxndqR_XWaF8w3tJkVlN6q6XDH7lA",
  authDomain: "mentorblog-45548.firebaseapp.com",
  databaseURL: "https://mentorblog-45548.firebaseio.com",
  projectId: "mentorblog-45548",
  storageBucket: "mentorblog-45548.appspot.com",
  messagingSenderId: "738299277788",
  appId: "1:738299277788:web:675c9eebace3ae3e435f19",
  measurementId: "G-BDG59MB9PK"
};
@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
    AboutComponent,
    WelcomeComponent,
    UploadContentComponent,
    LikeComponent,
    QuizComponent,
    QuizzComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    AuthModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  providers:[DataService,{ provide: InterceptorService, useClass: InterceptorService, multi: true },AuthGuard],
  exports: [RouterModule],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
