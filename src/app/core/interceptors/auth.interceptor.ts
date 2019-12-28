import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { Store, select } from '@ngrx/store';
import { IAuthState } from '../store/auth/auth.reducer';
import { authFeatureKey } from '../store/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private isUserAuthenticated: boolean;
    private user: IUser;

    constructor(private store: Store<{ auth: IAuthState }>) {
        this.store
            .pipe(select(authFeatureKey))
            .subscribe(({ userData, isAuthenticated }) => {
                this.user = userData;
                this.isUserAuthenticated = isAuthenticated;
            });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq = req;

        if (this.isUserAuthenticated) {
            const token = String(this.user.id);

            newReq = req.clone({ setHeaders: { token } });
        }

        return next.handle(newReq);
    }
}
