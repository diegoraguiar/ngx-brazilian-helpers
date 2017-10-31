import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { CnsService } from './services/cns.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cns][ngModel], [cns][formControl], [cns][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CnsDirective),
      multi: true
    },
    CnsService
  ]
})
export class CnsDirective implements Validator {

  constructor(private cnsService: CnsService) { }

  validate(control: AbstractControl) {
    if (!control.value || this.cnsService.validar(control.value)) {
      return null;
    } else {
      return {
        cns: {
          valid: false
        }
      };
    }
  }

}
