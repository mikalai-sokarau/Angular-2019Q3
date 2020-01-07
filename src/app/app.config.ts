import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';

export const APP_LANGUAGES = {
    ENGLISH: 'en',
    RUSSIAN: 'ru'
}

export const translateLoader = {
    loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
