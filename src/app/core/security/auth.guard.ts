import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const userAuth = this.authService.getUsuarioAuth();

    if (userAuth) {
      if (state.url.includes('index')) {
        this.authService.redirectToHome();
      }
      return true;
    } else {
      if (state.url.includes('index')) {
        return true;
      }
      this.authService.redirectToLogin();
    }
  }

}
