import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { SobrePageComponent } from './pages/sobre/sobre.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SobrePageComponent],
  imports: [CommonModule, SobreRoutingModule, SharedModule],
})
export class SobreModule {}
