import { Component, forwardRef, AfterContentInit, OnDestroy } from '@angular/core';
import { DurationPipe } from '../../pipes/duration/duration-pipe.pipe';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

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
export class InputDurationComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {
  static readonly MAX_DURATION_IN_MINUTES = 1440;
  static readonly MIN_DURATION_IN_MINUTES = 10;
  public formattedDuration: string;
  public duration: string;
  private subscription: Subscription;

  constructor(
    private durationPipe: DurationPipe,
    private translate: TranslateService
  ) {
    this.subscription = this.translate.onLangChange.subscribe(() => {
      this.formattedDuration = this.durationPipe.transform(Number(this.duration));
    });
  }

  public ngAfterContentInit(): void {
    this.formattedDuration = this.durationPipe.transform(Number(this.duration));
  }
  
  public onKeyUp(value: string): void {
    if (value !== this.duration) {
      this.writeValue(value);
    }
  }

  public onFocusOut(): void {
    this.onTouched();
  }
  
  public writeValue(value: string): void {
    this.duration = this.getLimitedDuration(value);
    this.formattedDuration = this.durationPipe.transform(Number(this.duration));
    this.onChange(this.duration);
  }
  
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getLimitedDuration(value: string): string {
    const num = Number(value);

    return num > Number.MAX_SAFE_INTEGER || num <= 0
      ? ''
      : String(num);
  }
  
  private onChange: any = () => {};
  private onTouched: any = () => {};
}
