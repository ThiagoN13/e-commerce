import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { TemplateMainComponent } from './page-templates/main/main.component';
import { TemplateLoginComponent } from './page-templates/login/login.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

import { SharedModule } from '../shared/shared.module';
import { MainFullWidthComponent } from './page-templates/main-full-width/main-full-width.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    TemplateMainComponent,
    TemplateLoginComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainFullWidthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
