import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { CourseComponent } from './components/course/course.component';
import { CourseHighlightingDirective } from './directives/course-highlighting.directive';
import { CoursesComponent } from './courses.component';
import { DurationPipe } from './pipes/duration-pipe.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ControlPanelComponent,
    CourseComponent,
    CourseHighlightingDirective,
    CoursesComponent,
    DurationPipe,
    FilterPipe,
    LoadMoreComponent,
    OrderByPipe,
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
