import { IUser } from './../../models/user.model';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from 'src/app/pages/courses/services/courses/courses.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean;
  private readonly loginUrl = '/api/login';
  private user: IUser | null;

  constructor(
    private router: Router,
    private http: HttpClient
    ) {
    this.isAuthenticated = Boolean(this.user);
  }

  public login(email: string, password: string): void {
    const params = {
      email,
      password
    };

    this.http.post(this.loginUrl, params)
      .subscribe((userData: IUser) => {
        if (userData) {
          this.user = userData;
          this.isAuthenticated = true;
          this.router.navigate(
            ['/courses'],
            { queryParams: { size: CoursesService.DEFAULT_COURSES_SIZE } }
          );
        }
      });
  }

  public logout(): void {
    this.user = null;
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  public getUserInfo(): IUser {
    return this.user;
  }
}
