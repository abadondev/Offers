import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  userRole
  constructor(private router: Router) {
    this.userRole = sessionStorage.getItem('user_role');


  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.userRole) {
      switch (this.userRole) {
        case '1':
          state.url !== '/client' ? this.router.navigate(['/client']) : null;
          break;
        case '2':
          state.url !== '/dashboard' ? this.router.navigate(['/dashboard']) : null;
          break;
        default:
          state.url !== '/login' ? this.router.navigate(['/login']) : null;
      }

      return true; //todo: remove;
    } else {
      return false;
    }
  }
}
