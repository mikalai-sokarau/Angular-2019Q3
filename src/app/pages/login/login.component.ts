import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginRequest } from 'src/app/core/store/auth/auth.actions';
import { IAuthState } from 'src/app/core/store/auth/auth.reducer';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  get email(): AbstractControl {
    return this.loginForm.get('userEmail');
  }

  get password(): AbstractControl {
    return this.loginForm.get('userPassword');
  }

  constructor(private store: Store<{ auth: IAuthState }>) {}

  ngOnInit() {
    this.loginForm = this.createForm();
  }

  public login(): void {
    const props = {
      userEmail: this.loginForm.value.userEmail,
      userPassword: this.loginForm.value.userPassword
    };
    
    this.store.dispatch(loginRequest(props));
  }

  private createForm(): FormGroup {
    return new FormGroup({
      userEmail: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      userPassword: new FormControl(
        '',
        [
          Validators.required
        ]
      )
    });
  }
}
