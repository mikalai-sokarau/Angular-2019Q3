import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoadingComponent } from '../shared/components/modals/global-loading/global-loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [
    GlobalLoadingComponent
  ]
})
export class CoreModule { }
