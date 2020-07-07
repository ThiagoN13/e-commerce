import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { TemplateMainComponent } from './core/page-templates/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TemplateMainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  {
    path: 'pagamento',
    component: TemplateMainComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/pagamento/pagamento.module').then(
            (m) => m.PagamentoModule
          ),
      },
    ],
  },
  {
    path: '',
    component: TemplateMainComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./features/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  // Page not found handling
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
