import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IAuthState } from '../store/auth/auth.reducer';
import { authFeatureKey } from '../store/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isUserAuthenticated: boolean;

  constructor(
    private router: Router,
    private store: Store<{ auth: IAuthState }>
  ) {
    this.store
      .pipe(select(authFeatureKey))
      .subscribe(
        ({ isAuthenticated }) => this.isUserAuthenticated = isAuthenticated
      );
  }

  public canActivate(): Observable<boolean> {
    return new Observable(observer => {
        if (!this.isUserAuthenticated) {
          this.router.navigate(['login']);
    
          observer.next(false);
        }
        
        observer.next(true);
    });
  }
  
}
