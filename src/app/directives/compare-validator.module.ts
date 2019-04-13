import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareValidatorDirective } from './compare-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompareValidatorDirective],
  exports: [CompareValidatorDirective]
})
export class CompareValidatorModule { }
