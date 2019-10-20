import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FakeLogoComponent } from './components/fake-logo/fake-logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    FakeLogoComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FakeLogoComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
