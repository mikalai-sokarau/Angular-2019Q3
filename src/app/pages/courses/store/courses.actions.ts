import { createAction, props } from '@ngrx/store';
import { ICourse } from '../components/course/course.model';

export enum CoursesActionTypes {
    COURSES_REQUEST = '[Courses Page] CoursesRequest',
    COURSES_REQUEST_SUCCESS = '[Courses Page] CoursesRequestSuccess',
}

export const coursesRequest = createAction(
    CoursesActionTypes.COURSES_REQUEST,
    props<{ from: string; to: string }>()
);

export const coursesRequestSuccess = createAction(
    CoursesActionTypes.COURSES_REQUEST_SUCCESS,
    props<{ items: Array<ICourse> }>()
);
