import { AuthService } from './../../../core/services/auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public user: IUser;
  private subscription: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.getUserInfo()
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
