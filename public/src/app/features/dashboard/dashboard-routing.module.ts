import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { DetalhesProdutosComponent } from './pages/detalhes-produto/detalhes-produto.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  },
  {
    path: 'detalhes/:produto',
    component: DetalhesProdutosComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
