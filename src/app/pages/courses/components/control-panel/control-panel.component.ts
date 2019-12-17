import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, Params } from '@angular/router';
import { fromEvent, interval, Subscription, Observable } from 'rxjs';
import { debounce, filter } from 'rxjs/operators';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements AfterViewInit, OnDestroy {
  public searchText = '';
  public searchEvent$: Observable<string>;
  private subscription: Subscription;
  private DEBOUNCE_INTERVAL_MS = 300;
  
  @ViewChild('searchInput', { static: false }) searchInput;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.searchEvent$ = fromEvent<string>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(() => this.searchText.length >= 3),
        debounce(() => interval(this.DEBOUNCE_INTERVAL_MS))
      );

    this.subscription = this.searchEvent$.subscribe(() => this.doSearch());
  }

  private doSearch(): void {
    console.log(this.searchText);
    
    const queryParams: Params = { find: this.searchText };

    this.router.navigate([], { queryParams });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
