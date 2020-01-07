import { LoginModule } from './pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './pages/courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { StoreModule, RootStoreConfig, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const metaReducers: MetaReducer[] = [];
const reducers: ActionReducerMap<any> = {};
const storeModuleConfig: RootStoreConfig<any, any> = {
  metaReducers, 
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoursesModule,
    CoreModule,
    LoginModule,
    NotFoundModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(reducers, storeModuleConfig),
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          maxAge: 10,
          logOnly: environment.production
      })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
