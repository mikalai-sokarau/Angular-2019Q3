import { ICourse } from './../../courses/course/course.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly coursesPath = '../../assets/mock-data/courses-data.json';

  constructor(
    private http: HttpClient
  ) { }

  getCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.coursesPath);
  }
}
