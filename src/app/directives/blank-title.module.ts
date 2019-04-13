import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankTitleDirective } from './blank-title.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlankTitleDirective],
  exports: [BlankTitleDirective]
})
export class BlankTitleModule { }
