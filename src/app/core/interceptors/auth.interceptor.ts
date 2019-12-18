import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { IUser } from '../models/user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private isUserAuthenticated: boolean;
    private user: IUser;

    constructor(private authService: AuthService) {
        this.authService.isAuthenticated$.subscribe(isAuthenticated => {
            this.isUserAuthenticated = isAuthenticated;
        });
        this.authService.getUserInfo().subscribe(user => this.user = user);
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
