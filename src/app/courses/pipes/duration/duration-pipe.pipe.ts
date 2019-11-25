import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  private readonly hoursPostfix = 'h';
  private readonly minutesInHour = 60;
  private readonly minutesPostfix = 'mm';
  private readonly minutesPrefix = '0';

  public transform(value: number): string {
    if (isNaN(value) || value <= 0) {
      return `0${this.hoursPostfix}00${this.minutesPostfix}`;
    }

    const hours = Math.floor(value / this.minutesInHour) || '';
    const minutes = value % this.minutesInHour;
    const formattedHours = hours && hours + this.hoursPostfix;
    const formattedMinutes = (this.minutesPrefix + minutes + this.minutesPostfix).slice(-4);

    return `${formattedHours}${formattedMinutes}`;
  }
}
