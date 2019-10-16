import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FakeLogoComponent } from './components/fake-logo/fake-logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    ControlPanelComponent,
    CourseComponent,
    CoursesComponent,
    FakeLogoComponent,
    FooterComponent,
    HeaderComponent,
    LoadMoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
