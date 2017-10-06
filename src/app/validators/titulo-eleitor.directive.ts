import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { TitutoEleitorService } from './services/tituto-eleitor.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tituloEleitor][ngModel], [tituloEleitor][formControl], [tituloEleitor][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TituloEleitorDirective),
      multi: true
    },
    TitutoEleitorService
  ]
})
export class TituloEleitorDirective implements Validator {

  constructor(private titutoEleitorService: TitutoEleitorService) { }

  validate(control: AbstractControl) {
    if (!control.value || this.titutoEleitorService.validar(control.value)) {
      return null;
    } else {
      return {
        tituloEleitor: {
          valid: false
        }
      };
    }
  }

}
