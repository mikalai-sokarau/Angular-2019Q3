import { ICourse } from '../../components/course/course.model';
import { Injectable, ComponentRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { GlobalLoadingComponent } from 'src/app/shared/components/modals/global-loading/global-loading.component';
import { ICoursesState } from '../../store/courses.reducers';
import { Store, select } from '@ngrx/store';
import { coursesFeatureKey } from '../../store';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly apiUrl = 'api/courses';
  static readonly DEFAULT_COURSES_SIZE = 5;
  private modalRef: ComponentRef<any>;

  constructor(
    private http: HttpClient,
    private modalService: ModalService,
    private store: Store<{ courses: ICoursesState }>
  ) {
    this.store
      .pipe(select(coursesFeatureKey))
      .subscribe(() => {
        this.removeSpinner();
      });
  }

  public createCourse(course: ICourse): Observable<ICourse> {
    const url = `${this.apiUrl}/create`;
    const body = { course: JSON.stringify(course) };
   
    this.addSpinner();
    return this.http.put<ICourse>(url, body);
  }

  public updateCourse(course: ICourse): Observable<ICourse> {
    const url = `${this.apiUrl}/update`;
    const body = { course: JSON.stringify(course)}

    this.addSpinner();
    return this.http.put<ICourse>(url, body)
  }

  public removeCourse(id: string): Observable<{ id: string }> {
    const url = `${this.apiUrl}/delete?id=${id}`;

    this.addSpinner();
    return this.http.delete<{ id: string }>(url)
  }

  public findCourses(text: string): Observable<Array<ICourse>> {
    const url = `${this.apiUrl}/find?text=${text}`;

    this.addSpinner();
    return this.http.get<Array<ICourse>>(url);
  }

  public loadCourses(
    from = 0,
    to = CoursesService.DEFAULT_COURSES_SIZE
  ): Observable<Array<ICourse>> {
    const url = `${this.apiUrl}?from=${from}&to=${to}`;

    this.addSpinner();
    return this.http.get<Array<ICourse>>(url)
  }

  removeSpinner(): void {
    if (this.modalRef) {
      this.modalService.closeModal(this.modalRef);
      this.modalRef = null;
    }
  }

  private addSpinner(): void {
    if (!this.modalRef) {
      this.modalRef = this.modalService.openModal(GlobalLoadingComponent);
    }
  }
}
