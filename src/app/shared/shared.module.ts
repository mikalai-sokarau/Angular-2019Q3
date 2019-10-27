import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FakeLogoComponent } from './components/fake-logo/fake-logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FakeLogoComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbsComponent,
    FakeLogoComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
