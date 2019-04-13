import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';


@Directive({
  selector: '[ValidDate]',
  providers: [ {provide: NG_VALIDATORS, useExisting: ValidDateDirective, multi: true } ]
})
export class ValidDateDirective {

  @Input('ValidDate') controlNameToCompare:string;
  
  private dateFrom: Date = new Date();
  private dateTo: Date = new Date();

  validate (c: AbstractControl): ValidationErrors | null {

    if ( c.value === null ) {
      return null;
    }

    const controlToCompare = c.root.get ( this.controlNameToCompare );
    
    this.dateTo = new Date ( c.value.date.year, c.value.date.month - 1, c.value.date.day );
    this.dateFrom = new Date ( controlToCompare.value.date.year, controlToCompare.value.date.month - 1, controlToCompare.value.date.day );

    if ( controlToCompare ) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe ( ()=> {
        c.updateValueAndValidity ();
        subscription.unsubscribe ();
     
        this.dateFrom = new Date ( controlToCompare.value.date.year, controlToCompare.value.date.month - 1, controlToCompare.value.date.day );
      } );
    }
    
    return  this.dateTo < this.dateFrom ? { 'compare':true } : null;
  }


}


