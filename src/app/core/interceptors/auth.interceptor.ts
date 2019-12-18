import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq = req;

        this.authService.isAuthenticated.subscribe(isAuthenticated => {
            if (isAuthenticated) {
                const token = String(this.authService.getUserInfo().id);

                newReq = req.clone({ setHeaders: { token } });
            }
        });

        return next.handle(newReq);
    }
}
