import {
  ActionReducerMap,
  MetaReducer,
  RootStoreConfig
} from '@ngrx/store';
import { environment, IEnvironment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authReducer, IAuthState } from '../core/services/auth/auth.service.reducer';

export const reducers: ActionReducerMap<any> = { auth: authReducer };

export const metaReducers: MetaReducer<IAuthState>[] = environment.production ? [] : [];

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
