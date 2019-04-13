import { Directive, Input, ElementRef, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[spinner]',
  host: {
        '(click)': 'click()'
       }
})
export class ButtonSpinnerDirective {

  @Input('spinner') spinner:Observable<boolean>;

  constructor( private el:ElementRef) {
  }

  click() {
    this.el.nativeElement.innerHTML = this.el.nativeElement.textContent + " " + '<i class="fa fa-refresh fa-spin fa-fw"></i>';
    this.spinner.subscribe ( response => {
      this.el.nativeElement.innerHTML = this.el.nativeElement.textContent;
    });
  }

}
