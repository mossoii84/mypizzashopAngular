import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Tokenstorageservice} from "./tokenstorageservice";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivate called');
    if (Tokenstorageservice.isAuthorities()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }


  }




