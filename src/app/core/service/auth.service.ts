import {AbstractService} from './abstract.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';
import {UserAuth} from '../model/user-auth.model';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService extends AbstractService {

  constructor(http: HttpClient, private storage: SessionStorageService, private router: Router) {
    super(http);
  }

  autenticar(userAuth: UserAuth): Observable<string> {
    return this.http.post<string>(this.API_REST + '/autenticar', userAuth);
  }

  getUsuarioAuth(): UserAuth {
    return this.storage.retrieve('userauth');
  }

  saveUsuarioAuth(userAuth: UserAuth): void {
    this.storage.store('userauth', {
      token: userAuth.token
    });
  }

  doLogout(): void {
    this.storage.clear('userauth');
    this.redirectToLogin();
  }

  redirectToHome(): void {
    this.router.navigate(['/principal']);
  }

  redirectToLogin(): void {
    this.router.navigate(['/index']);
  }

}
