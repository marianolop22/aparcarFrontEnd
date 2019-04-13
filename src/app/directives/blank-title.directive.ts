import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[BlankTitle]',
  providers: [ {provide: NG_VALIDATORS, useExisting: BlankTitleDirective, multi: true } ]
})
export class BlankTitleDirective {

  constructor() { }

  validate (c: AbstractControl): ValidationErrors | null {

    if ( c.value === null || c.value === "" ) {
      return null;
    }
    
    return c.value.trim().length == 0 ? { 'blankTitle':true } : null;
  }


}
