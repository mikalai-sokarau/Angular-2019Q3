import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_LANGUAGES } from 'src/app/app.config';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  private readonly minutesInHour = 60;
  private readonly minutesPrefix = '0';

  constructor(private translate: TranslateService) {}

  public transform(value: number): string {
    const currentLang = this.translate.store.currentLang;
    const { hoursPostfix, minutesPostfix } = 
      this.translate.store.translations[currentLang].courseManipulationPage.placeholders;
    const sliceNum = currentLang === APP_LANGUAGES.ENGLISH
      ? -4
      : -5;
    
    if (isNaN(value) || value <= 0) {
      return `0${hoursPostfix}00${minutesPostfix}`;
    }

    const hours = Math.floor(value / this.minutesInHour) || '';
    const minutes = value % this.minutesInHour;
    const formattedHours = hours && hours + hoursPostfix;
    const formattedMinutes = (this.minutesPrefix + minutes + minutesPostfix).slice(sliceNum);

    return `${formattedHours}${formattedMinutes}`;
  }
}
