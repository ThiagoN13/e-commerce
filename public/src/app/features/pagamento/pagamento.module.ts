import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoComponent } from './pages/pagamento-page/pagamento.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PagamentoComponent],
  imports: [CommonModule, PagamentoRoutingModule, SharedModule],
})
export class PagamentoModule {}
