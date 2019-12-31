import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import { InputDurationComponent } from '../../components/input-duration/input-duration.component';

export function durationValidator(
  min = InputDurationComponent.MIN_DURATION_IN_MINUTES,
  max = InputDurationComponent.MAX_DURATION_IN_MINUTES
): ValidatorFn {
  return ({ value }: AbstractControl): { [ key: string ]: number } | null => 
    value < min || value > max
      ? { 'limit': value }
      : null;
}

@Directive({
  selector: '[appDurationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DurationValidatorDirective,
      multi: true
    }
  ]
})
export class DurationValidatorDirective implements Validator {
  @Input() min: number;
  @Input() max: number;
  
  validate(control: AbstractControl): { [ key: string ]: number } | null {
    return durationValidator(this.min, this.max)(control);
  }
}
