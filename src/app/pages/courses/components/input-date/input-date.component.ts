import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDateComponent),
      multi: true
    }
  ]
})
export class InputDateComponent implements ControlValueAccessor {
  public static readonly pattern = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)([2][0][1-2][0-9])$/;
  public date: string;

  constructor() {}
  
  public onKeyUp(value: string): void {
    if (value) {
      this.writeValue(value);
    }
  }
  
  public writeValue(value: string): void {
    this.date = value;
    this.onChange(this.date);
  }
  
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public onFocusOut(): void {
    this.onTouched();
  }
  
  public static formatDate(date: string, toServer?: boolean) {
    const slash = '/';
    const hyphen = '-';
    const splitSymbol = toServer ? slash : hyphen;
    const joinSymbor = toServer ? hyphen : slash;

    return date.split(splitSymbol).reverse().join(joinSymbor);
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};
}
