import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagamentoComponent } from './pages/pagamento-page/pagamento.component';
import { ListaItensComponent } from './pages/lista-itens/lista-itens.component';
import { FormaPagamentoComponent } from './pages/forma-pagamento/forma-pagamento.component';

const routes: Routes = [
  {
    path: '',
    component: PagamentoComponent,
    children: [
      {
        path: '',
        component: ListaItensComponent
      },
      {
        path: 'forma-pagamento',
        component: FormaPagamentoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentoRoutingModule {}
