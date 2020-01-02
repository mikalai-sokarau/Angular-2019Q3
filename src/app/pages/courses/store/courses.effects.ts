import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoursesService } from '../services/courses/courses.service';
import { ICourse } from '../components/course/course.model';
import { 
    CoursesActionTypes,
    coursesRequestSuccess,
    coursesRequestUpdateSuccess,
    coursesRequestCreateSuccess,
    coursesRequestFindSuccess,
    coursesRequestFindError,
    coursesRequestDeleteSuccess,
    authorsRequestSuccess
} from './courses.actions';

@Injectable()
export class CoursesEffects {

    public loadCourses$ = createEffect(() => this.actions$.pipe<{ from: number, to: number }, any>(
        ofType(CoursesActionTypes.COURSES_REQUEST),
        mergeMap(({ from, to }) => 
            this.coursesService
                .loadCourses(from, to)
                .pipe(
                    map(items => coursesRequestSuccess({ items })),
                    catchError(() => EMPTY)
                )
        )
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
                map(() => coursesRequestCreateSuccess()),
                catchError(() => EMPTY)
        ))
    ));

    public findCourses$ = createEffect(() => this.actions$.pipe<{ find: string }, any>(
        ofType(CoursesActionTypes.COURSES_REQUEST_FIND),
        mergeMap(({ find }) => 
            this.coursesService
                .findCourses(find)
                .pipe(
                    map(items => coursesRequestFindSuccess({ items })),
                    catchError(() => of(coursesRequestFindError()))
                ))
    ));

    public deleteCourse$ = createEffect(() => this.actions$.pipe<{ id: string }, any>(
        ofType(CoursesActionTypes.COURSES_REQUEST_DELETE),
        mergeMap(({ id }) => 
            this.coursesService
                .removeCourse(id)
                .pipe(
                    map(id => {
                        this.coursesService.removeSpinner();
                        return coursesRequestDeleteSuccess(id)
                    }),
                    catchError(() => EMPTY)
                )
        )
    ));

    public getAuthors$ = createEffect(() => this.actions$.pipe<any, any>(
        ofType(CoursesActionTypes.AUTHORS_REQUEST),
        mergeMap(() => 
            this.coursesService
                .loadAuthors()
                .pipe(
                    map(authors => authorsRequestSuccess({ authors })),
                    catchError(() => EMPTY)
                ))
    ));
  
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService
    ) {}
}
