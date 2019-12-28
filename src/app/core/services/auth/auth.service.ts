import { IUser } from './../../models/user.model';
import { Injectable, ComponentRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { GlobalLoadingComponent } from 'src/app/shared/components/modals/global-loading/global-loading.component';
import { Store, select } from '@ngrx/store';
import { restoreUserData } from '../../store/auth/auth.actions';
import { CoursesService } from 'src/app/pages/courses/services/courses/courses.service';
import { IAuthState } from '../../store/auth/auth.reducer';
import { authFeatureKey } from '../../store/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = '/api/login';
  private readonly userStoreId = 'user';
  private modalRef: ComponentRef<any>;

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

    this.store
      .pipe(select(authFeatureKey))
      .subscribe((state: IAuthState) => this.updateUserData(state.userData));
  }

  public login(email: string, password: string): Observable<IUser> {
    const params = {
      email,
      password
    };

    this.modalRef = this.modalService.openModal(GlobalLoadingComponent);

    return this.http.post<IUser>(this.loginUrl, params);
  }

  public logout(): void {
    this.clearUserData();
    this.router.navigate(['/login']);
  }

  private updateUserData(userData: IUser): void {
    if (userData.firstName && userData.lastName && userData.id) {
      this.saveUserToStore(userData);
      this.router.navigate(
        ['/courses'],
        { queryParams: { from: 0, to: CoursesService.DEFAULT_COURSES_SIZE } }
      )
    }

    if (this.modalRef) {
      this.modalService.closeModal(this.modalRef);
      this.modalRef = null;
    }
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
