import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlPanelComponent } from './control-panel/control-panel.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ControlPanelComponent,
    CourseComponent,
    CoursesComponent,
    LoadMoreComponent
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
