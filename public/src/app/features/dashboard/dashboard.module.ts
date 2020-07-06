import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AsideFiltroComponent } from '../../core/components/aside-filtro/aside-filtro.component';
import { CardItemComponent } from '../../core/components/card-item/card-item.component';
import { FavoritarProdutoComponent } from '../../core/components/favoritar-produto/favoritar-produto.component';
import { DetalhesProdutosComponent } from './pages/detalhes-produto/detalhes-produto.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  declarations: [
    DashboardPageComponent,
    DetalhesProdutosComponent,
    OfertasComponent,
    FavoritarProdutoComponent,
    AsideFiltroComponent,
    CardItemComponent,
    CarrinhoComponent
  ],
})

export class DashboardModule {}
