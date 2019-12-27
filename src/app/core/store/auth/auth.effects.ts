import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { loginRequestSuccess, logoutRequestSuccess, AuthActionTypes } from 'src/app/core/store/auth/auth.actions';

@Injectable()
export class AuthEffects {

    public login$ = createEffect(() => this.actions$.pipe<{ userEmail: string, userPassword: string }, any>(
        ofType(AuthActionTypes.LOGIN_REQUEST),
        mergeMap(({ userEmail, userPassword }) => 
            this.authService.login(userEmail, userPassword).pipe(
                map(loginRequestSuccess),
                catchError(() => EMPTY)
        )),
    ));
  
    public logout$ = createEffect(() => this.actions$.pipe<undefined, any>(
        ofType(AuthActionTypes.LOGOUT_REQUEST),
        mergeMap(() => 
            of(this.authService.logout()).pipe(
                map(logoutRequestSuccess),
                catchError(() => EMPTY)
            ),
        )
    ))

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {}
}
