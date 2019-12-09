import { ICourse } from '../../components/course/course.model';
import { Injectable } from '@angular/core';
// import { getRandomCourseImage } from '../../../../../assets/mock-data/courses-data';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly apiUrl = 'api/courses';
  static readonly DEFAULT_COURSES_SIZE = 5;
  public courses: Array<ICourse> = [];
  public courses$: BehaviorSubject<Array<ICourse>>

  constructor(private http: HttpClient) {
    this.courses$ = new BehaviorSubject(new Array<ICourse>());
  }

  public coursesUpdates(): Observable<Array<ICourse>> {
    return this.courses$.asObservable();
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

  public loadCourses(from = 0, to = CoursesService.DEFAULT_COURSES_SIZE): void {
    const url = `${this.apiUrl}?from=${from}&to=${to}`;
    
    this.http.get<Array<ICourse>>(url)
      .subscribe(courses => {
        this.courses = courses;
        this.courses$.next(this.courses);
      });
  }
}
