import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  @Output() executeSearch: EventEmitter<string> = new EventEmitter();
  public searchText = '';

  constructor() { }

  ngOnInit() {
  }

  public onSearchClick(): void {
    this.executeSearch.emit(this.searchText);
  }
}
