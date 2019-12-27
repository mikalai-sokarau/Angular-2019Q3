import { IEnvironment } from '../../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const coursesFeatureKey = 'courses';

export const storeDevtoolsConfig = (environment: IEnvironment) => 
  !environment.production
    ? StoreDevtoolsModule.instrument({ maxAge: 20, logOnly: environment.production })
    : [];
