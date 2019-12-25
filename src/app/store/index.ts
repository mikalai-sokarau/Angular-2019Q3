import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  RootStoreConfig
} from '@ngrx/store';
import { environment, IEnvironment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer as auth } from '../core/services/auth/auth.service.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  auth
};

export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [];

export const storeModuleConfig: RootStoreConfig<any, any> = {
  metaReducers, 
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
  }
}

export function storeDevtoolsConfig(environment: IEnvironment) {
  return environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          maxAge: 10,
          logOnly: environment.production
        });
}
