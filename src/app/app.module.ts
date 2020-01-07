import { LoginModule } from './pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { TranslateModule } from '@ngx-translate/core';
import { translateLoader, APP_LANGUAGES } from './app.config';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

const metaReducers: MetaReducer[] = [];
const reducers: ActionReducerMap<any> = {};
const storeModuleConfig: RootStoreConfig<any, any> = {
  metaReducers, 
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
  }
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
    TranslateModule.forRoot(translateLoader),
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
export class AppModule {
  constructor() {
    registerLocaleData(localeRu, APP_LANGUAGES.RUSSIAN);
  }
}
