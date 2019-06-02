import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {NavAtividadesComponent} from './nav-atividades/nav-atividades.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppRoutes} from '../app-carros.routing';

@NgModule({
  declarations: [
    NavbarComponent,
    NavAtividadesComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    NavAtividadesComponent
  ]
})
export class SharedUtilsModule {}
