import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlPanelComponent } from './control-panel/control-panel.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  declarations: [
    ControlPanelComponent,
    CourseComponent,
    CoursesComponent,
    LoadMoreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
