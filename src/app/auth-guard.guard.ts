import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from './services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanActivateChild {

  constructor(public firebaseService: FirebaseService, public router: Router) { }

  isLoggedIn: boolean;

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    this.isLoggedIn = await this.firebaseService.isLoggedIn.value;
    if (!this.isLoggedIn)
      this.router.navigateByUrl("");
    return this.isLoggedIn;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
