import { ICourse } from '../../components/course/course.model';
import { Injectable } from '@angular/core';
// import { getRandomCourseImage } from '../../../../../assets/mock-data/courses-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly apiUrl = 'api/courses';
  static readonly DEFAULT_COURSES_SIZE = 5;
  private courses: Array<ICourse> = [];

  constructor(
    private http: HttpClient
  ) {
    this.loadCourses()
      .subscribe((courses) => {
        if (courses) {
          this.courses = courses;
        }
      });
  }

  public getCourses(size?: number): Observable<Array<ICourse>> {
    return this.loadCourses(size)
  }

  public createCourse(course: ICourse): ICourse {
    course.id = String(Date.now());
    course.isTopRated = false;
    // course.image = getRandomCourseImage();

    this.courses.push(course);

    return course;
  }

  public getCourseById(id: string): ICourse {
    return this.courses.find(course => id === course.id);
  }

  public updateCourse(config: ICourse): ICourse {
    const courseToUpdate = this.courses.find(course => config.id === course.id);

    Object.assign(courseToUpdate, config);

    return courseToUpdate;
  }

  public removeCourse(id: string): Array<ICourse> {
    this.courses = this.courses.filter(course => course.id !== id);

    return this.courses;
  }

  private loadCourses(
    size = CoursesService.DEFAULT_COURSES_SIZE
  ): Observable<Array<ICourse>> {
    const url = `${this.apiUrl}?size=${size}`;

    return this.http.get<Array<ICourse>>(url)
  }
}
