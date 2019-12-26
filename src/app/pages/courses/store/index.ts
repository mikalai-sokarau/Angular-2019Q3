import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment, IEnvironment } from '../../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ICoursesState, coursesReducer } from './courses.reducers';

export const coursesFeatureKey = 'courses';

export const reducers: ActionReducerMap<any> = { courses: coursesReducer };

export const metaReducers: MetaReducer<ICoursesState>[] = environment.production ? [] : [];

export function storeDevtoolsConfig(environment: IEnvironment) {
  return environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          maxAge: 10,
          logOnly: environment.production
        });
}
