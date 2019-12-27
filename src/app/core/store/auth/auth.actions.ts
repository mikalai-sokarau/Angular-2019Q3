import { createAction, props } from '@ngrx/store';
import { IUser } from '../../models/user.model';

export enum AuthActionTypes {
    RESTORE_USER_DATA = '[AuthService] RestoreUserData',
    LOGIN_REQUEST = '[AuthService] LoginRequest',
    LOGIN_REQUEST_SUCCESS = '[AuthService] LoginRequestSuccess',
    LOGOUT_REQUEST = '[AuthService] LogoutRequest',
    LOGOUT_REQUEST_SUCCESS = '[AuthService] LogoutRequestSuccess',
}

export const restoreUserData = createAction(
    AuthActionTypes.RESTORE_USER_DATA,
    props<{ user: IUser, isAuthenticated: boolean }>()
);

export const loginRequest = createAction(
    AuthActionTypes.LOGIN_REQUEST,
    props<{ userEmail: string; userPassword: string }>()
);

export const loginRequestSuccess = createAction(
    AuthActionTypes.LOGIN_REQUEST_SUCCESS,
    props<IUser>()
);

export const logoutRequest = createAction(
    AuthActionTypes.LOGOUT_REQUEST
);

export const logoutRequestSuccess = createAction(
    AuthActionTypes.LOGOUT_REQUEST_SUCCESS
);
