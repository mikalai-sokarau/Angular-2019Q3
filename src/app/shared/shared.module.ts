import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faCloudUploadAlt,
  faEdit,
  faEllipsisH,
  faTimes,
  faTrashAlt,
  faSignInAlt,
  faSignOutAlt,
  faSortDown,
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
import { GlobalLoadingComponent } from './components/modals/global-loading/global-loading.component';

const icons: Array<IconDefinition> = [
  faBars,
  faClock,
  faCalendarAlt,
  faCloudUploadAlt,
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
    DeleteConfirmationModalComponent,
    GlobalLoadingComponent
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
