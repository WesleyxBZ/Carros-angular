import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './index/login/login.component';
import {PrincipalComponent} from './principal/principal.component';
import {VisualizarComponent} from './principal/visualizar/visualizar.component';
import {CadastrarComponent} from './principal/cadastrar/cadastrar.component';
import {AuthGuard} from './core/security/auth.guard';

export const AppRoutes: Routes = [
  // Index
  // Para acesso sem token.
  {path: '', redirectTo: 'principal', pathMatch: 'full'},
  {
    path: 'index', component: IndexComponent, canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent}
    ]
  },

  // Página principal
  {
    path: 'principal', component: PrincipalComponent,
    children: [
      {path: '', redirectTo: 'visualizar', pathMatch: 'full'},
      {path: 'visualizar', component: VisualizarComponent, data: {animation: 'Visualizar'}},
      {path: 'cadastrar', component: CadastrarComponent, data: {animation: 'Cadastrar'}}
    ]
  }
];

