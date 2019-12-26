import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { ICourse } from '../course/course.model';
import { Store } from '@ngrx/store';
import { ICoursesState } from '../../store/courses.reducers';
import { coursesRequestUpdate } from '../../store/courses.actions';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public course: ICourse;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private store: Store<{ courses: ICoursesState }>
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      this.course = this.coursesService.getCourseById(id);
    })
  }

  public editCourse(course: ICourse): void {
    this.store.dispatch(coursesRequestUpdate({ course }));
  }
}
