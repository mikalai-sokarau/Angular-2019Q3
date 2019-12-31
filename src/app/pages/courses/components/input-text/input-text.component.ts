import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
  }],
})
export class InputTextComponent implements ControlValueAccessor {
  public description: string;

  constructor() {}

  public onKeyUp(value: string): void {
    this.writeValue(value);
  }

  public writeValue(value: string): void {
    this.description = value;
    this.onChange(value);
    this.onTouched();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};
}
