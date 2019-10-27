import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faSortDown,
  faEdit,
  faEllipsisH,
  faTrashAlt,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const icons: Array<IconDefinition> = [
  faBars,
  faEdit,
  faEllipsisH,
  faPlayCircle,
  faSortDown,
  faTrashAlt
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
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    BreadcrumbsComponent,
    FontAwesomeModule,
    FormsModule,
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
