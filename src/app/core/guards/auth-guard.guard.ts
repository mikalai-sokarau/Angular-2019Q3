import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  public canActivate(): Observable<boolean> {
    return new Observable(observer => {
      this.authService.isAuthenticated.subscribe(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['login']);
    
          observer.next(false);
        }
        
        observer.next(true);
      });
    });
  }
  
}
