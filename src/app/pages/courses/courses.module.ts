import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCourseComponent } from './components/add-course/add-course.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { CourseComponent } from './components/course/course.component';
import { CourseHighlightingDirective } from './directives/course-highlighting.directive';
import { CoursesComponent } from './courses.component';
import { DurationPipe } from './pipes/duration/duration-pipe.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { SharedModule } from '../../shared/shared.module';
import {
  DeleteConfirmationModalComponent
} from '../../shared/components/modals/deleteConfirmation/delete-confirmation-modal/delete-confirmation-modal.component';
import { InputDurationComponent } from './components/input-duration/input-duration.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CourseManipulationComponent } from './components/course-manipulation/course-manipulation.component';
import { StoreModule } from '@ngrx/store';
import { storeDevtoolsConfig, coursesFeatureKey } from './store';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './store/courses.effects';
import { coursesReducer } from './store/courses.reducers';

@NgModule({
  declarations: [
    AddCourseComponent,
    ControlPanelComponent,
    CourseComponent,
    CourseHighlightingDirective,
    CoursesComponent,
    DurationPipe,
    FilterPipe,
    LoadMoreComponent,
    OrderByPipe,
    InputDurationComponent,
    InputTextComponent,
    EditCourseComponent,
    CourseManipulationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forFeature(
      coursesFeatureKey, 
      coursesReducer
    ),
    EffectsModule.forFeature([CoursesEffects]),
    storeDevtoolsConfig(environment)
  ],
  exports: [
    CoursesComponent
  ],
  entryComponents: [
    DeleteConfirmationModalComponent
  ]
})
export class CoursesModule { }
