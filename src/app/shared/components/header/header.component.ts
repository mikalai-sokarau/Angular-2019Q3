import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { logoutRequest } from 'src/app/core/services/auth/auth.service.actions';
import { IAuthState } from 'src/app/core/services/auth/auth.service.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public user$: Observable<IAuthState> = this.store.pipe(select('auth'));
  public logoutRequest = logoutRequest;
  
  constructor(private store: Store<{ auth: IAuthState }>) {}
}
