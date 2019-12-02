import { IUser } from './../../models/user.model';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

const MOCK_USER: IUser = {
  firstName: 'Walton',
  lastName: 'Decker',
  id: 123
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean;
  private user: IUser | null;

  constructor(private router: Router) {
    this.isAuthenticated = Boolean(this.user);
  }

  public login(): void {
    this.user = MOCK_USER;
    this.isAuthenticated = true;
    this.router.navigate(['/courses']);
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
