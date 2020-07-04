import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { AsideFiltroComponent } from '../../core/components/aside-filtro/aside-filtro.component';
import { CardItemComponent } from '../../core/components/card-item/card-item.component';
import { FavoritarProdutoComponent } from '../../core/components/favoritar-produto/favoritar-produto.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  declarations: [
    DashboardPageComponent,
    OfertasComponent,
    CardItemComponent,
    AsideFiltroComponent,
    FavoritarProdutoComponent
  ],
})

export class DashboardModule {}
