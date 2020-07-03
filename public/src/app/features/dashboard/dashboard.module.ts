import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { AsideFiltroComponent } from '../../core/components/aside-filtro/aside-filtro.component';
import { CardItemComponent } from '../../core/components/card-item/card-item.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DashboardPageComponent,
    OfertasComponent,
    CardItemComponent,
    AsideFiltroComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
