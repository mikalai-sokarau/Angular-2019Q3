import { createReducer, on, Action } from '@ngrx/store';
import { ICourse } from '../components/course/course.model';
import {
    coursesRequestSuccess,
    coursesRequestUpdateSuccess,
    coursesRequestFindSuccess,
    coursesRequestFindError,
    coursesRequestDeleteSuccess
} from './courses.actions';

export interface ICoursesState {
    items: Array<ICourse>
}

export const initialState: ICoursesState = {
    items: []
};

const reducer = createReducer<ICoursesState>(
    initialState,
    on(
        coursesRequestSuccess,
        (state, { items }) => ({
            ...state,
            items
        })
    ),
    on(
        coursesRequestUpdateSuccess,
        (state, { course }) => {
            const index = state.items.findIndex(item => item.id === course.id);
            const newItems = [...state.items];
            newItems[index] = course;

            return {
                ...state,
                items: newItems
            }
        }
    ),
    on(
        coursesRequestFindSuccess,
        (state, { items }) => ({
            ...state,
            items
        })
    ),
    on(
        coursesRequestFindError,
        state => ({
            ...state,
            items: []
        })
    ),
    on(
        coursesRequestDeleteSuccess,
        (state, { id }) => ({
            ...state,
            items: state.items.filter(item => id !== item.id)
        })
    )
);

export function coursesReducer(state: ICoursesState | undefined, action: Action) {
    return reducer(state, action);
}
