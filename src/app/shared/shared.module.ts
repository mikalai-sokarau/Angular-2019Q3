import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faSortDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const icons: Array<IconDefinition> = [
  faBars,
  faPlayCircle,
  faSortDown
];

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    LogoComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    BreadcrumbsComponent,
    LogoComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule {
  constructor(faLibrary: FaIconLibrary) {
    faLibrary.addIcons(...icons);
  }
}
