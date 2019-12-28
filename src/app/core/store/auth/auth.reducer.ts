import { createReducer, on, Action } from '@ngrx/store';
import { IUser } from '../../models/user.model';
import {
    loginRequestSuccess,
    logoutRequestSuccess,
    restoreUserData,
    authRequestError
} from './auth.actions';

export interface IAuthState {
    isAuthenticated: boolean;
    userData: IUser
}

export const authInitialState: IAuthState = {
    isAuthenticated: false,
    userData: {
        firstName: null,
        lastName: null,
        id: null
    }
};

const reducer = createReducer(
    authInitialState,
    on(
        restoreUserData,
        (state, { isAuthenticated, user }) => ({
            ...state,
            isAuthenticated,
            userData: {
                firstName: user && user.firstName,
                lastName: user && user.lastName,
                id: user && user.id
            }
        })
    ),
    on(
        loginRequestSuccess,
        (state, { firstName, lastName, id }) => ({
            ...state,
            isAuthenticated: true,
            userData: {
                firstName,
                lastName,
                id
            }
        })
    ),
    on(
        logoutRequestSuccess,
        authRequestError,
        state => ({
            ...state,
            isAuthenticated: false,
            userData: {
                firstName: null,
                lastName: null,
                id: null
            }
        })
    )
);

export function authReducer(state: IAuthState | undefined, action: Action) {
    return reducer(state, action);
}
