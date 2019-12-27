import { IUser } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { GlobalLoadingComponent } from 'src/app/shared/components/modals/global-loading/global-loading.component';
import { Store } from '@ngrx/store';
import { restoreUserData } from '../../store/auth/auth.actions';
import { CoursesService } from 'src/app/pages/courses/services/courses/courses.service';
import { IAuthState } from '../../store/auth/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = '/api/login';
  private readonly userStoreId = 'user';
  private userInfo$: ReplaySubject<IUser>;

  constructor(
    private router: Router,
    private http: HttpClient,
    private modalService: ModalService,
    private store: Store<{ auth: IAuthState }>
  ) {
    const user = this.getUserFromStore();

    this.store.dispatch(
      restoreUserData({ user, isAuthenticated: Boolean(user) })
    );
    this.userInfo$ = new ReplaySubject<IUser>(1);
  }

  public login(email: string, password: string): Observable<any> {
    const params = {
      email,
      password
    };
    const modalRef = this.modalService.openModal(GlobalLoadingComponent);

    this.http.post(this.loginUrl, params)
      .subscribe((userData: IUser) => {
        if (userData) {
          this.saveUserToStore(userData);
          this.userInfo$.next(userData);
          this.router.navigate(
            ['/courses'],
            { queryParams: { from: 0, to: CoursesService.DEFAULT_COURSES_SIZE } }
          )
        }
        this.modalService.closeModal(modalRef);
      });

    return this.userInfo$;
  }

  public logout(): void {
    this.clearUserData();
    this.router.navigate(['/login']);
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
