import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { ICourse } from '../course/course.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  public course: ICourse;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      this.course = this.coursesService.getCourseById(id);
    })
  }

}
