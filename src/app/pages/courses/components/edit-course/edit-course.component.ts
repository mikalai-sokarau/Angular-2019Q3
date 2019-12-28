import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from '../course/course.model';
import { Store, select } from '@ngrx/store';
import { ICoursesState } from '../../store/courses.reducers';
import { coursesRequestUpdate } from '../../store/courses.actions';
import { coursesFeatureKey } from '../../store';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public course: ICourse;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ courses: ICoursesState }>
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.store
        .pipe(select(coursesFeatureKey))
        .subscribe(({ items }) => this.course = items.find(c => id === c.id));
    })
  }

  public editCourse(course: ICourse): void {
    this.store.dispatch(coursesRequestUpdate({ course }));
  }
}
