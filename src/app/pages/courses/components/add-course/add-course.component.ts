import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  constructor(private coursesService: CoursesService) { }
  
}
