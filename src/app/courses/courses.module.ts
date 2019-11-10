import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './courses.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { SharedModule } from '../shared/shared.module';
import { CourseHighlightingDirective } from './directives/course-highlighting.directive';

@NgModule({
  declarations: [
    ControlPanelComponent,
    CourseComponent,
    CoursesComponent,
    LoadMoreComponent,
    CourseHighlightingDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
