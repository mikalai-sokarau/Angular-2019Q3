import { createAction, props } from '@ngrx/store';
import { ICourse } from '../components/course/course.model';

export enum CoursesActionTypes {
    COURSES_REQUEST = '[Courses Page] CoursesRequest',
    COURSES_REQUEST_SUCCESS = '[Courses Page] CoursesRequestSuccess',
    COURSES_REQUEST_Update = '[Courses Page] CoursesRequestUpdate',
    COURSES_REQUEST_Update_SUCCESS = '[Courses Page] CoursesRequestUpdateSuccess',
    COURSES_REQUEST_ADD = '[Courses Page] CoursesRequestAdd',
    COURSES_REQUEST_ADD_SUCCESS = '[Courses Page] CoursesRequestAddSuccess'
};

export const coursesRequest = createAction(
    CoursesActionTypes.COURSES_REQUEST,
    props<{ from: string; to: string }>()
);

export const coursesRequestSuccess = createAction(
    CoursesActionTypes.COURSES_REQUEST_SUCCESS,
    props<{ items: Array<ICourse> }>()
);

export const coursesRequestUpdate = createAction(
    CoursesActionTypes.COURSES_REQUEST_Update,
    props<{ course: ICourse }>()
);

export const coursesRequestUpdateSuccess = createAction(
    CoursesActionTypes.COURSES_REQUEST_Update_SUCCESS,
    props<{ course: ICourse }>()
);

export const coursesRequestAdd = createAction(
    CoursesActionTypes.COURSES_REQUEST_ADD,
    props<{ course: ICourse }>()
);

export const coursesRequestAddSuccess = createAction(
    CoursesActionTypes.COURSES_REQUEST_ADD_SUCCESS,
    props<{ course: ICourse }>()
);
