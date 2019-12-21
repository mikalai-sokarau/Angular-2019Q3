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


export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

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
