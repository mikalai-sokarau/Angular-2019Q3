import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  public searchText = '';

  constructor(private router: Router) {}

  ngOnInit() {
  }

  public onSearchClick(): void {
    const queryParams: Params = { find: this.searchText };

    this.router.navigate([], { queryParams });
  }
}
