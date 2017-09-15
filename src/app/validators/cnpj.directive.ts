import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { CnpjService } from './services/cnpj.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cnpj][ngModel], [cnpj][formGroupName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CnpjValidatorDirective),
      multi: true
    },
    CnpjService
  ]
})
export class CnpjValidatorDirective implements Validator {

  constructor(private cnpjService: CnpjService) { }

  validate(control: AbstractControl) {
    if (!control.value || this.cnpjService.validar(control.value)) {
      return null;
    } else {
      return {
        cnpj: {
          valid: false
        }
      };
    }
  }

}
