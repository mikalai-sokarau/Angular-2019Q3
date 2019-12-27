import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoadingComponent } from '../shared/components/modals/global-loading/global-loading.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { AuthEffects } from './store/auth/auth.effects';
import { storeDevtoolsConfig, authFeatureKey } from './store/auth';
import { authReducer } from './store/auth/auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      authFeatureKey,
      authReducer
    ),
    EffectsModule.forFeature([AuthEffects]),
    storeDevtoolsConfig(environment)
  ],
  entryComponents: [
    GlobalLoadingComponent
  ]
})
export class CoreModule { }
