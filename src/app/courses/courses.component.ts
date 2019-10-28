import { Component, OnInit } from '@angular/core';
import { ICourse } from './course/course.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Array<ICourse> = [];
  private readonly coursesPath = '../../assets/mock-data/courses-data.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Array<ICourse>>(this.coursesPath)
      .subscribe((courses: Array<ICourse>) => {
        courses.length = 5;
        this.courses = courses;
      });
  }

  onDeleteCourse(id: string) {
    console.log(`Delete: ${id}`);
  }
}
