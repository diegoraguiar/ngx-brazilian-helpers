import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { NitService } from './services/nit.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[nit][ngModel], [nit][formGroupName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NitDirective),
      multi: true
    },
    NitService
  ]
})
export class NitDirective implements Validator {

  constructor(private nitService: NitService) { }

  validate(control: AbstractControl) {
    if (!control.value || this.nitService.validar(control.value)) {
      return null;
    } else {
      return {
        nit: {
          valid: false
        }
      };
    }
  }

}
