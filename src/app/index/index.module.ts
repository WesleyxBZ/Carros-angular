import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AuthGuard} from '../core/security/auth.guard';
import {AuthService} from '../core/service/auth.service';

import {NgxWebstorageModule} from 'ngx-webstorage';
import {SharedUtilsModule} from '../shared-utils/shared-utils.module';

import {IndexComponent} from './index.component';
import {LoginComponent} from './login/login.component';

import {AppRoutes} from '../app-carros.routing';

@NgModule({
  imports: [
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    SharedUtilsModule,
  ],
  declarations: [
    IndexComponent,
    LoginComponent
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [IndexComponent]
})
export class IndexModule {
}
