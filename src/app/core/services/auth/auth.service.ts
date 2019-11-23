import { IUser } from './../../models/user.model';
import { Injectable } from '@angular/core';

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

  constructor() {
    this.isAuthenticated = Boolean(this.user);
  }

  public login(): void {
    this.user = MOCK_USER;
    this.isAuthenticated = true;

    console.log('logged in successfully');
  }

  public logout(): void {
    this.user = null;
    this.isAuthenticated = false;

    console.log('logged out successfully');
  }

  public getUserInfo(): IUser {
    return this.user;
  }
}
