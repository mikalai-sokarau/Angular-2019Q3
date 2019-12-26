import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoursesActionTypes, coursesRequestSuccess, coursesRequestUpdateSuccess } from './courses.actions';
import { CoursesService } from '../services/courses/courses.service';
import { ICourse } from '../components/course/course.model';

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
        ofType(CoursesActionTypes.COURSES_REQUEST_Update),
        mergeMap(({ course }) => 
            this.coursesService.updateCourse(course).pipe(
                map(course => coursesRequestUpdateSuccess({ course })),
                catchError(() => EMPTY)
        ))
    ));
  
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService
    ) {}
}
