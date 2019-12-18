import { IUser } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from 'src/app/pages/courses/services/courses/courses.service';
import { ReplaySubject, Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { GlobalLoadingComponent } from 'src/app/shared/components/modals/global-loading/global-loading.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated$: ReplaySubject<boolean>;
  private readonly loginUrl = '/api/login';
  private readonly userStoreId = 'user';
  private user: IUser | null;
  private userInfo$: ReplaySubject<IUser>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private modalService: ModalService
  ) {
    this.user = this.getUserFromStore();
    this.isAuthenticated$ = new ReplaySubject(1);
    this.isAuthenticated$.next(Boolean(this.user));
    this.userInfo$ = new ReplaySubject<IUser>(1);
    this.userInfo$.next(this.user);
  }

  public login(email: string, password: string): void {
    const params = {
      email,
      password
    };
    const modalRef = this.modalService.openModal(GlobalLoadingComponent);

    this.http.post(this.loginUrl, params)
      .subscribe((userData: IUser) => {
        if (userData) {
          this.user = userData;
          this.isAuthenticated$.next(true);
          this.userInfo$.next(this.user);
          this.saveUserToStore(userData);
          this.modalService.closeModal(modalRef);
          this.router.navigate(
            ['/courses'],
            { queryParams: { from: 0, to: CoursesService.DEFAULT_COURSES_SIZE } }
          );
        }
      });
  }

  public logout(): void {
    this.user = null;
    this.isAuthenticated$.next(false);
    this.clearUserData();
    this.router.navigate(['/login']);
  }

  public getUserInfo(): Observable<IUser> {
    return this.userInfo$;
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
