import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { InputDateComponent } from '../../components/input-date/input-date.component';

export function dateValidator(pattern = InputDateComponent.pattern): ValidatorFn {
  return ({ value }: AbstractControl): { [ key: string ]: string } | null => {
    const result = value.match(pattern);
    
    return !result || !result[0]
      ? { 'error': 'date does not match the pattern' }
      : null;
  }
}

@Directive({
  selector: '[appDaveValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true
    }
  ]
})
export class DateValidatorDirective {
  public validate(control: AbstractControl): { [ key: string ]: string } | null {
    return dateValidator()(control);
  }
}
