import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-global-loading',
  templateUrl: './global-loading.component.html',
  styleUrls: ['./global-loading.component.scss']
})
export class GlobalLoadingComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit(): void {
    this.document.body.style.position = 'fixed';
  }

  ngOnDestroy(): void {
    this.document.body.style.position = 'static';
  }
}
