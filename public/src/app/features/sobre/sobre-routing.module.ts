import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobrePageComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: SobrePageComponent,
    data: {
      title: 'Sobre nós'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreRoutingModule {}
