import { createReducer, on, Action } from '@ngrx/store';
import { coursesRequestSuccess, coursesRequestUpdateSuccess } from './courses.actions';
import { ICourse } from '../components/course/course.model';

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
    )
);

export function coursesReducer(state: ICoursesState | undefined, action: Action) {
    return reducer(state, action);
}
