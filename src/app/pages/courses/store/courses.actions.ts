import { createAction, props } from '@ngrx/store';
import { ICourse } from '../components/course/course.model';

export enum CoursesActionTypes {
    COURSES_REQUEST = '[Courses Page] CoursesRequest',
    COURSES_REQUEST_SUCCESS = '[Courses Page] CoursesRequestSuccess',
    COURSES_REQUEST_UPDATE = '[Courses Page] CoursesRequestUpdate',
    COURSES_REQUEST_UPDATE_SUCCESS = '[Courses Page] CoursesRequestUpdateSuccess',
    COURSES_REQUEST_CREATE = '[Courses Page] CoursesRequestCreate',
    COURSES_REQUEST_CREATE_SUCCESS = '[Courses Page] CoursesRequestCreateSuccess',
    COURSES_REQUEST_FIND = '[Courses Page] CoursesRequestFind',
    COURSES_REQUEST_FIND_SUCCESS = '[Courses Page] CoursesRequestFindSuccess',
    COURSES_REQUEST_FIND_ERROR = '[Courses Page] CoursesRequestFindError',
    COURSES_REQUEST_DELETE = '[Courses Page] CoursesRequestDelete',
    COURSES_REQUEST_DELETE_SUCCESS = '[Courses Page] CoursesRequestDeleteSuccess'
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
    CoursesActionTypes.COURSES_REQUEST_CREATE_SUCCESS
);

export const coursesRequestFind = createAction(
    CoursesActionTypes.COURSES_REQUEST_FIND,
    props<{ find: string }>()
);

export const coursesRequestFindSuccess = createAction(
    CoursesActionTypes.COURSES_REQUEST_FIND_SUCCESS,
    props<{ items: Array<ICourse> }>()
);

export const coursesRequestFindError = createAction(
    CoursesActionTypes.COURSES_REQUEST_FIND_ERROR
);

export const coursesRequestDelete = createAction(
    CoursesActionTypes.COURSES_REQUEST_DELETE,
    props<{ id: string }>()
);

export const coursesRequestDeleteSuccess = createAction(
    CoursesActionTypes.COURSES_REQUEST_DELETE_SUCCESS,
    props<{ id: string }>()
);
