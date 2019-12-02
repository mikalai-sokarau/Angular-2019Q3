import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { ICourse } from '../course/course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  constructor(private coursesService: CoursesService) { }

  public onSaveCourse(course: ICourse): void {
    this.coursesService.createCourse(course);
  }
}
