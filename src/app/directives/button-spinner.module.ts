import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonSpinnerDirective } from './button-spinner.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonSpinnerDirective],
  exports: [ButtonSpinnerDirective]
})
export class ButtonSpinnerModule { }
