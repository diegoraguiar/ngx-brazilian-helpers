import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { RenavamService } from './services/renavam.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[renavam][ngModel], [renavam][formGroupName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RenavamDirective),
      multi: true
    },
    RenavamService
  ]
})
export class RenavamDirective implements Validator {

  constructor(private renavamService: RenavamService) { }

  validate(control: AbstractControl) {
    if (!control.value || this.renavamService.validar(control.value)) {
      return null;
    } else {
      return {
        renavam: {
          valid: false
        }
      };
    }
  }

}
