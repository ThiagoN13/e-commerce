import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InteractiveIconComponent } from './components/interactive-icon/interactive-icon.component';
import { MaterialModule } from './material/material.module';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { NoItemsComponent } from './components/no-items/no-items.component';
import { FullPageLoaderComponent } from './components/full-page-loader/full-page-loader.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    InteractiveIconComponent,
    SafeHtmlPipe,
    LoadingComponent,
    ErrorComponent,
    NoItemsComponent,
    FullPageLoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    InteractiveIconComponent,
    MaterialModule,
    SafeHtmlPipe,
    LoadingComponent,
    ErrorComponent,
    NoItemsComponent,
    FullPageLoaderComponent,
    ToastrModule
  ]
})
export class SharedModule {}
