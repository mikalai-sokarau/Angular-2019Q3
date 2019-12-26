import { ICourse } from '../../components/course/course.model';
import { Injectable, ComponentRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { GlobalLoadingComponent } from 'src/app/shared/components/modals/global-loading/global-loading.component';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly apiUrl = 'api/courses';
  static readonly DEFAULT_COURSES_SIZE = 5;
  public courses: Array<ICourse> = [];
  public courses$: ReplaySubject<Array<ICourse>>;
  private singleCourse$: ReplaySubject<ICourse>;
  private modalRef: ComponentRef<any>;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {
    this.courses$ = new ReplaySubject(1);
    this.singleCourse$ = new ReplaySubject(1);
  }

  public createCourse(course: ICourse): Observable<ICourse> {
    const url = `${this.apiUrl}/create`;
    const body = { course: JSON.stringify(course) };
   
    this.addSpinner();
    this.http.put<ICourse>(url, body).subscribe(course => {
      this.removeSpinner();
      this.singleCourse$.next(course);
    });

    return this.singleCourse$;
  }

  public getCourseById(id: string): ICourse {
    return this.courses.find(course => id === course.id);
  }

  public updateCourse(course: ICourse): Observable<ICourse> {
    const url = `${this.apiUrl}/update`;
    const courseToUpdate = this.courses.find(c => c.id === course.id);
    const body = { course: JSON.stringify({ ...courseToUpdate, ...course })}

    this.addSpinner();
    this.http.put<ICourse>(url, body).subscribe(course => {
      this.removeSpinner();
      this.singleCourse$.next(course);
    });

    return this.singleCourse$;
  }

  public removeCourse(id: string): void {
    const url = `${this.apiUrl}/delete?id=${id}`;
    const { from , to } = this.route.snapshot.queryParams;

    this.addSpinner();
    this.http.delete<Array<ICourse>>(url)
      .subscribe(
        () => this.loadCourses(from, to),
        this.handleErrors
      );
  }

  public findCourses(text: string): void {
    const url = `${this.apiUrl}/find?text=${text}`;

    this.addSpinner();
    this.http.get<Array<ICourse>>(url)
      .subscribe(
        this.updateCourses,
        this.handleErrors
      );
  }

  public loadCourses(
    from = 0,
    to = CoursesService.DEFAULT_COURSES_SIZE
  ): Observable<Array<ICourse>> {
    const url = `${this.apiUrl}?from=${from}&to=${to}`;

    this.addSpinner();
    this.http.get<Array<ICourse>>(url)
      .subscribe(
        this.updateCourses,
        this.handleErrors
      );

    return this.courses$
  }

  private updateCourses = (courses: Array<ICourse>) => {
    this.courses = courses;
    this.courses$.next(this.courses);
    this.removeSpinner();
  }

  private handleErrors = () => {
    this.updateCourses([]);
  }

  private addSpinner(): void {
    if (!this.modalRef) {
      this.modalRef = this.modalService.openModal(GlobalLoadingComponent);
    }
  }

  private removeSpinner(): void {
    if (this.modalRef) {
      this.modalService.closeModal(this.modalRef);
      this.modalRef = null;
    }
  }
}
