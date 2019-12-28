import { IEnvironment } from '../../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IAuthState } from './auth.reducer';

export interface State {
  auth: IAuthState
};

export const authFeatureKey = 'auth';

export function storeDevtoolsConfig(environment: IEnvironment) {
  return environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          maxAge: 20,
          logOnly: environment.production
        });
}
