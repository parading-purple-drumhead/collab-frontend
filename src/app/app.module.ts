import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { DiscoverComponent } from './discover/discover.component';
import { PostDetailsComponent } from './post-details/post-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    DiscoverComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA1puJFNciq0gh8V3CMR3Ov7VsjNGyyCFE",
      authDomain: "collab-d76aa.firebaseapp.com",
      projectId: "collab-d76aa",
      storageBucket: "collab-d76aa.appspot.com",
      messagingSenderId: "438448346803",
      appId: "1:438448346803:web:9bb0d8f31234896b96c2c6"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
