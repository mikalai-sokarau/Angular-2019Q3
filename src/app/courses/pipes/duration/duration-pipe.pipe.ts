import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  private readonly hoursPostfix = 'h';
  private readonly minutesInHour = 60;
  private readonly minutesPostfix = 'mm';
  private readonly minutesPrefix = '0';

  transform(value: string): string {
    const hours = Math.floor(Number(value) / this.minutesInHour) || '';
    const minutes = Number(value) % this.minutesInHour;
    const formattedHours = hours && hours + this.hoursPostfix;
    const formattedMinutes = (this.minutesPrefix + minutes + this.minutesPostfix).slice(-4);

    return `${formattedHours}${formattedMinutes}`;
  }
}
