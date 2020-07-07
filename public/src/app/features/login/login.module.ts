import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginService } from './services/login/login.service';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
})
export class LoginModule {}
