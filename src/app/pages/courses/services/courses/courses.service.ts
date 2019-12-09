import { ICourse } from '../../components/course/course.model';
import { Injectable } from '@angular/core';
// import { getRandomCourseImage } from '../../../../../assets/mock-data/courses-data';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly apiUrl = 'api/courses';
  static readonly DEFAULT_COURSES_SIZE = 5;
  public courses: Array<ICourse> = [];
  public courses$: BehaviorSubject<Array<ICourse>>

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.courses$ = new BehaviorSubject(new Array<ICourse>());
  }

  public coursesUpdates(): Observable<Array<ICourse>> {
    return this.courses$.asObservable();
  }

  public createCourse(course: ICourse): void {
    const url = `${this.apiUrl}/create`;
    const body = { course: JSON.stringify(course) };
    
    this.http.put<ICourse>(url, body).subscribe()
  }

  public getCourseById(id: string): ICourse {
    return this.courses.find(course => id === course.id);
  }

  public updateCourse(config: ICourse): ICourse {
    const courseToUpdate = this.courses.find(course => config.id === course.id);

    Object.assign(courseToUpdate, config);

    return courseToUpdate;
  }

  public removeCourse(id: string): void {
    const url = `${this.apiUrl}/delete?id=${id}`;
    const { from , to } = this.route.snapshot.queryParams;

    this.http.delete<Array<ICourse>>(url)
      .subscribe(
        () => this.loadCourses(from, to),
        this.handleErrors
      );
  }

  public findCourses(text: string): void {
    const url = `${this.apiUrl}/find?text=${text}`;

    this.http.get<Array<ICourse>>(url)
      .subscribe(
        this.updateCourses,
        this.handleErrors
      );
  }

  public loadCourses(from = 0, to = CoursesService.DEFAULT_COURSES_SIZE): void {
    const url = `${this.apiUrl}?from=${from}&to=${to}`;

    this.http.get<Array<ICourse>>(url)
      .subscribe(
        this.updateCourses,
        this.handleErrors
      );
  }

  private updateCourses = (courses: Array<ICourse>) => {
    this.courses = courses;
    this.courses$.next(this.courses);
  }

  private handleErrors = () => {
    this.updateCourses([]);
  }
}
