import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public isLoggedIn = new BehaviorSubject<boolean>(this.loginStatus);

  constructor(public auth: AngularFireAuth) { }

  async login() {
    await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      console.log(res.user);
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("loginStatus","1");
      this.isLoggedIn.next(true);
    });
  }

  logout() {
    this.auth.signOut();
    localStorage.setItem("user", "");
    localStorage.setItem("loginStatus","0");
    this.isLoggedIn.next(false);
  }

  get loggedIn(){
    return this.isLoggedIn.asObservable();
  }

  get loginStatus(){
    if (localStorage.getItem("loginStatus") == "1")
      return true;
    return false;
  }
}
