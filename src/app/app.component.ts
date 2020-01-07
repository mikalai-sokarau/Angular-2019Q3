import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const APP_LANGUAGES = {
  ENGLISH: 'en',
  RUSSIAN: 'ru'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2019q3';

  constructor(translate: TranslateService) {
    const browserLang = translate.getBrowserLang();

    translate.addLangs([
      APP_LANGUAGES.ENGLISH,
      APP_LANGUAGES.RUSSIAN
    ]);
    translate.setDefaultLang(APP_LANGUAGES.ENGLISH);
    translate.use(
      browserLang.match(`${ APP_LANGUAGES.ENGLISH }|${ APP_LANGUAGES.RUSSIAN }`)
        ? browserLang
        : APP_LANGUAGES.ENGLISH
    );
  }
  
}
