import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserAuth} from '../model/user-auth.model';
import {AuthService} from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private activeUserAuth: UserAuth;

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.activeUserAuth = this.authService.getUsuarioAuth();
    if (this.activeUserAuth) {
      const authRequest = req.clone(
        {
          setHeaders: {
            Authorization: 'Bearer ' + this.activeUserAuth.token
          }
        });
      return next.handle(authRequest);
    } else {
      return next.handle(req);
    }
  }
}
