import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export function authorsValidator(): ValidatorFn {
  return ({ value }: AbstractControl): { [ key: string ]: string } | null => 
    !value || !value.length
      ? { 'error': 'there must be at least one author' }
      : null
}

@Directive({
  selector: '[appAuthorsValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AuthorsValidatorDirective,
      multi: true
    }
  ]
})
export class AuthorsValidatorDirective {
  public validate(control: AbstractControl): { [ key: string ]: string } | null {
    return authorsValidator()(control);
  }
}
