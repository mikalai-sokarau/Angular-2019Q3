import { Component, forwardRef, AfterContentInit } from '@angular/core';
import { DurationPipe } from '../../pipes/duration/duration-pipe.pipe';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-duration',
  templateUrl: './input-duration.component.html',
  styleUrls: ['./input-duration.component.scss'],
  providers: [
    DurationPipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDurationComponent),
      multi: true
    }
  ]
})
export class InputDurationComponent implements AfterContentInit, ControlValueAccessor {
  static readonly MAX_DURATION_IN_MINUTES = 1440;
  static readonly MIN_DURATION_IN_MINUTES = 10;
  public formattedDuration: string;
  public duration: string;

  constructor(private durationPipe: DurationPipe) {}

  public ngAfterContentInit(): void {
    this.formattedDuration = this.durationPipe.transform(Number(this.duration));
  }
  
  public onKeyUp(value: string): void {
    this.writeValue(value);
  }
  
  public writeValue(value: string): void {
    this.duration = this.getLimitedDuration(value);
    this.formattedDuration = this.durationPipe.transform(Number(this.duration));
    this.onChange(this.duration);
    this.onTouched();
  }
  
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private getLimitedDuration(value: string): string {
    const num = Number(value);

    return num > Number.MAX_SAFE_INTEGER || num <= 0
      ? ''
      : value;
  }
  
  private onChange: any = () => {};
  private onTouched: any = () => {};
}
