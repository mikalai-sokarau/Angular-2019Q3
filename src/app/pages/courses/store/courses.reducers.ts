import { createReducer, on, Action } from '@ngrx/store';
import { coursesRequestSuccess } from './courses.actions';
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
);

export function coursesReducer(state: ICoursesState | undefined, action: Action) {
    return reducer(state, action);
}
