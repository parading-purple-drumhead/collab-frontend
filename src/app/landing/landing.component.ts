import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  isLoggedIn: Observable<boolean>;

  constructor(public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit() { }

  async login() {
    // this.router.navigateByUrl("/discover");
    if (!this.firebaseService.isLoggedIn.value){
      await this.firebaseService.login();
      this.login();
    }
    else
      this.router.navigateByUrl("/discover")
  }

}
