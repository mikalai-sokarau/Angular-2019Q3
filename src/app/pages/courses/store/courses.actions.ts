import { createAction, props } from '@ngrx/store';
import { ICourse } from '../components/course/course.model';

export enum CoursesActionTypes {
    COURSES_REQUEST = '[Courses Page] CoursesRequest',
    COURSES_REQUEST_SUCCESS = '[Courses Page] CoursesRequestSuccess',
    COURSES_REQUEST_UPDATE = '[Courses Page] CoursesRequestUpdate',
    COURSES_REQUEST_UPDATE_SUCCESS = '[Courses Page] CoursesRequestUpdateSuccess',
    COURSES_REQUEST_CREATE = '[Courses Page] CoursesRequestCreate',
    COURSES_REQUEST_CREATE_SUCCESS = '[Courses Page] CoursesRequestCreateSuccess'
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
    CoursesActionTypes.COURSES_REQUEST_UPDATE,
    props<{ course: ICourse }>()
);

export const coursesRequestUpdateSuccess = createAction(
    CoursesActionTypes.COURSES_REQUEST_UPDATE_SUCCESS,
    props<{ course: ICourse }>()
);

export const coursesRequestCreate = createAction(
    CoursesActionTypes.COURSES_REQUEST_CREATE,
    props<{ course: ICourse }>()
);

export const coursesRequestCreateSuccess = createAction(
    CoursesActionTypes.COURSES_REQUEST_CREATE_SUCCESS,
    props<{ course: ICourse }>()
);
