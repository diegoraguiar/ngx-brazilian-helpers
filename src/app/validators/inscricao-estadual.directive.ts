import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

import { InscricaoEstadualFactory } from './services/inscricao-estadual/inscricao-estadual.factory';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[inscricaoEstadual][ngModel], [inscricaoEstadual][formControl], [inscricaoEstadual][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InscricaoEstadualDirective),
      multi: true
    }
  ]
})
export class InscricaoEstadualDirective implements Validator {

  private _uf;

  @Input('inscricaoEstadual')
  public set inscricaoEstadual(value: string) {
    this._uf = value;
  }

  validate(control: AbstractControl) {
    if (!control.value || this.validaInscricaoEstadual(control.value)) {
      return null;
    } else {
      return {
        inscricaoEstadual: {
          valid: false
        }
      };
    }
  }

  private validaInscricaoEstadual(inscricaoEstadual: string): boolean {
    const instancia = InscricaoEstadualFactory.criaInstancia(this._uf);

    if (instancia) {
      return instancia.validar(inscricaoEstadual);
    } else {
      return false;
    }
  }

}
