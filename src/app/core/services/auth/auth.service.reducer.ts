import { createReducer, on } from '@ngrx/store';
import { loginRequestSuccess, logoutRequestSuccess, restoreUserData } from './auth.service.actions';
import { IUser } from '../../models/user.model';

export interface IAuthState {
    isAuthenticated: boolean;
    userData: IUser
}

const initialState: IAuthState = {
    isAuthenticated: false,
    userData: {
        firstName: null,
        lastName: null,
        id: null
    }
};

export const authReducer = createReducer(
    initialState,
    on(
        restoreUserData,
        (state, { isAuthenticated, user }) => ({
            ...state,
            isAuthenticated: isAuthenticated,
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
