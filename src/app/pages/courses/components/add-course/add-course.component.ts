import { Component } from '@angular/core';
import { ICourse, Course } from '../course/course.model';
import { ICoursesState } from '../../store/courses.reducers';
import { Store } from '@ngrx/store';
import { coursesRequestCreate } from '../../store/courses.actions';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  public course: ICourse = new Course();

  constructor(private store: Store<{ courses: ICoursesState }>) {}

  public onSaveCourse(course: ICourse): void {
    this.store.dispatch(coursesRequestCreate({ course }));
  }
}
