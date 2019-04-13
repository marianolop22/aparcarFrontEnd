import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidDateDirective } from './valid-date.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ValidDateDirective],
  exports: [ValidDateDirective]
})
export class ValidDateModule { }
