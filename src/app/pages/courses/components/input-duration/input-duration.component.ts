import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DurationPipe } from '../../pipes/duration/duration-pipe.pipe';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss'],
  providers: [DurationPipe]
})
export class InputDurationComponent implements OnInit {
  public readonly MAX_DURATION_IN_MINUTES = 1440;
  public formattedDuration: string;
  @Input() duration: number;
  @Output() durationChange: EventEmitter<number> = new EventEmitter();

  constructor(private durationPipe: DurationPipe) {}

  ngOnInit() {
    this.formattedDuration = this.durationPipe.transform(this.duration);
  }

  public onDurationChange(): void {
    if (this.duration > this.MAX_DURATION_IN_MINUTES) {
      this.duration = this.MAX_DURATION_IN_MINUTES;
    } else if (this.duration <= 0) {
      this.duration = null;
    }

    this.formattedDuration = this.durationPipe.transform(this.duration);
    this.durationChange.emit(this.duration);
  }
}
