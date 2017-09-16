import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { CpfService } from './services/cpf.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cpf][ngModel], [cpf][formGroupName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CpfDirective),
      multi: true
    },
    CpfService
  ]
})
export class CpfDirective implements Validator {

  constructor(private cpfService: CpfService) { }

  validate(control: AbstractControl) {
    if (!control.value || this.cpfService.validar(control.value)) {
      return null;
    } else {
      return {
        cpf: {
          valid: false
        }
      };
    }
  }

}
