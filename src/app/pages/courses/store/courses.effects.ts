import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoursesService } from '../services/courses/courses.service';
import { ICourse } from '../components/course/course.model';
import { 
    CoursesActionTypes,
    coursesRequestSuccess,
    coursesRequestUpdateSuccess,
    coursesRequestCreateSuccess
} from './courses.actions';

@Injectable()
export class CoursesEffects {

    public loadCourses$ = createEffect(() => this.actions$.pipe<{ from: number, to: number }, any>(
        ofType(CoursesActionTypes.COURSES_REQUEST),
        mergeMap(({ from, to }) => 
            this.coursesService.loadCourses(from, to).pipe(
                map(items => coursesRequestSuccess({ items })),
                catchError(() => EMPTY)
        ))
    ));

    public updateCourse$ = createEffect(() => this.actions$.pipe<{ course: ICourse }, any>(
        ofType(CoursesActionTypes.COURSES_REQUEST_UPDATE),
        mergeMap(({ course }) => 
            this.coursesService.updateCourse(course).pipe(
                map(course => coursesRequestUpdateSuccess({ course })),
                catchError(() => EMPTY)
        ))
    ));
    
    public addCourse$ = createEffect(() => this.actions$.pipe<{ course: ICourse }, any>(
        ofType(CoursesActionTypes.COURSES_REQUEST_CREATE),
        mergeMap(({ course }) => 
            this.coursesService.createCourse(course).pipe(
                map(course => coursesRequestCreateSuccess({ course })),
                catchError(() => EMPTY)
        ))
    ));
  
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService
    ) {}
}
