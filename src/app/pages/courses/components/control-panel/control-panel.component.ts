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
  private readonly DEBOUNCE_INTERVAL_MS = 300;
  private readonly MINIMAL_SEARCH_TEXT_LENGTH = 3;
  
  @ViewChild('searchInput', { static: false }) searchInput;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const excludeShortSearchQueries = () => 
      this.searchText.length >= this.MINIMAL_SEARCH_TEXT_LENGTH
      || !this.searchText.length;
    const addIntervalBetweenQueryChanges = () => interval(this.DEBOUNCE_INTERVAL_MS);

    this.searchEvent$ = fromEvent<string>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(excludeShortSearchQueries),
        debounce(addIntervalBetweenQueryChanges)
      );

    this.subscription = this.searchEvent$.subscribe({
      next: () => this.doSearch()
    });
  }

  private doSearch(): void {
    const queryParams: Params = this.searchText
      ? { find: this.searchText }
      : {};

    this.router.navigate([], { queryParams });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
