import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { logoutRequest } from 'src/app/core/store/auth/auth.actions';
import { IAuthState } from 'src/app/core/store/auth/auth.reducer';
import { authFeatureKey } from 'src/app/core/store/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public user$: Observable<IAuthState> = this.store.pipe(select(authFeatureKey));
  public logoutRequest = logoutRequest;
  
  constructor(private store: Store<{ auth: IAuthState }>) {}
}
