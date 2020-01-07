import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_LANGUAGES } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2019q3';

  constructor(translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    const currentLang = browserLang
      .match(`${ APP_LANGUAGES.ENGLISH }|${ APP_LANGUAGES.RUSSIAN }`)
        ? browserLang
        : APP_LANGUAGES.ENGLISH

    translate.addLangs(Object.values(APP_LANGUAGES));
    translate.setDefaultLang(APP_LANGUAGES.ENGLISH);
    translate.use(currentLang);
  }
  
}
