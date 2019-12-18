import { IUser } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from 'src/app/pages/courses/services/courses/courses.service';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: ReplaySubject<boolean>;
  private readonly loginUrl = '/api/login';
  private readonly userStoreId = 'user';
  private user: IUser | null;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.user = this.getUserFromStore();
    this.isAuthenticated = new ReplaySubject(1);
    this.isAuthenticated.next(Boolean(this.user));
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
          this.isAuthenticated.next(true);
          this.saveUserToStore(userData);
          this.router.navigate(
            ['/courses'],
            { queryParams: { from: 0, to: CoursesService.DEFAULT_COURSES_SIZE } }
          );
        }
      });
  }

  public logout(): void {
    this.user = null;
    this.isAuthenticated.next(false);
    this.clearUserData();
    this.router.navigate(['/login']);
  }

  public getUserInfo(): IUser {
    return this.user;
  }

  private getUserFromStore(): IUser {
    const user = localStorage.getItem(this.userStoreId);
    
    return user
      ? JSON.parse(user)
      : null;
  }

  private clearUserData(): void {
    localStorage.removeItem(this.userStoreId);
  }

  private saveUserToStore(user: IUser): void {
    localStorage.setItem(this.userStoreId, JSON.stringify(user));
  }
}
