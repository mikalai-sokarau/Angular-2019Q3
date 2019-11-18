import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faSortDown,
  faEdit,
  faEllipsisH,
  faTimes,
  faTrashAlt,
  faSignInAlt,
  faSignOutAlt,
  faUserGraduate,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import {
  faCalendarAlt,
  faClock,
  faPlayCircle,
  faStar
} from '@fortawesome/free-regular-svg-icons';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {
  DeleteConfirmationModalComponent
} from './components/modals/deleteConfirmation/delete-confirmation-modal/delete-confirmation-modal.component';
import { AppRoutingModule } from '../app-routing.module';

const icons: Array<IconDefinition> = [
  faBars,
  faClock,
  faCalendarAlt,
  faEdit,
  faEllipsisH,
  faPlayCircle,
  faSortDown,
  faSignInAlt,
  faSignOutAlt,
  faStar,
  faTimes,
  faTrashAlt,
  faUserGraduate
];

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    LogoComponent,
    FooterComponent,
    HeaderComponent,
    DeleteConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule
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
