import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isUserAuthenticated: boolean;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.authService.isAuthenticated.subscribe(isAuthenticated => 
      this.isUserAuthenticated = isAuthenticated
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
