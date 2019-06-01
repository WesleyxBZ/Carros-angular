import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavAtividadesComponent } from './nav-atividades/nav-atividades.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavAtividadesComponent,
    CadastrarComponent,
    VisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
