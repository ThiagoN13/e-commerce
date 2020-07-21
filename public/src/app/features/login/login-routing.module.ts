import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login/login.component';
import { CadastroPageComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    data: {
      title: 'Welcome back',
    },
  },
  {
    path: 'cadastro',
    component: CadastroPageComponent,
    data: {
      title: 'Cadastro',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
