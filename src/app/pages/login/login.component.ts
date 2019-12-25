import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginRequest } from 'src/app/core/services/auth/auth.service.actions';
import { IAuthState } from 'src/app/core/services/auth/auth.service.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userEmail: string;
  public userPassword: string;

  constructor(private store: Store<{ auth: IAuthState }>) {}

  public login(): void {
    const props = {
      userEmail: this.userEmail,
      userPassword: this.userPassword
    };
    
    this.store.dispatch(loginRequest(props));
  }
}
