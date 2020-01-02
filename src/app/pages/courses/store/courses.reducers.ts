import { createReducer, on, Action } from '@ngrx/store';
import { ICourse } from '../components/course/course.model';
import {
    coursesRequestSuccess,
    coursesRequestUpdateSuccess,
    coursesRequestFindSuccess,
    coursesRequestFindError,
    coursesRequestDeleteSuccess,
    authorsRequestSuccess
} from './courses.actions';
import { IAuthor } from '../components/input-author/input-author.model';

export interface ICoursesState {
    items: Array<ICourse>,
    autors: Array<IAuthor>
}

export const initialState: ICoursesState = {
    items: [],
    autors: []
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
    ),
    on(
        authorsRequestSuccess,
        (state, { authors }) => ({
            ...state,
            authors
        })
    )
);

export function coursesReducer(state: ICoursesState | undefined, action: Action) {
    return reducer(state, action);
}
