import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public firebaseService: FirebaseService, public router: Router) { }

  isLoggedIn: Observable<boolean>;

  ngOnInit(): void {
    this.isLoggedIn = this.firebaseService.loggedIn;
  }

  logout() {
    this.firebaseService.logout();
    this.router.navigateByUrl("")
  }

}
