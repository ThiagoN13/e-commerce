import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaleConoscoPageComponent } from './pages/login/fale-conosco.component';

const routes: Routes = [
  {
    path: '',
    component: FaleConoscoPageComponent,
    data: {
      title: 'Fale Conosco',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaleConoscoRoutingModule {}
