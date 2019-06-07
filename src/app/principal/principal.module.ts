import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {NgxWebstorageModule} from 'ngx-webstorage';
import {SharedUtilsModule} from '../shared-utils/shared-utils.module';

import {AuthService} from '../core/service/auth.service';
import {AuthGuard} from '../core/security/auth.guard';

import {AppRoutes} from '../app-carros.routing';

import {VisualizarComponent} from './visualizar/visualizar.component';
import {CadastrarComponent} from './cadastrar/cadastrar.component';
import {PrincipalComponent} from './principal.component';
import {CarroService} from '../core/service/carro.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    SharedUtilsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    ToastrModule.forRoot()
  ],
  declarations: [
    VisualizarComponent,
    CadastrarComponent,
    PrincipalComponent
  ],

  providers: [
    AuthGuard,
    AuthService,
    CarroService
  ]
})
export class PrincipalModule {}
