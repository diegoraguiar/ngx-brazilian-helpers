import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';

@Directive({
    selector: '[cnpj][ngModel], [cnpj][formGroupName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CnpjValidatorDirective,
            multi: true
        }
    ]
})
export class CnpjValidatorDirective implements Validator {

    validate(control: AbstractControl) {
        if (!control.value || this.validarCnpj(control.value)) {
            return null;
        } else {
            return {
                cnpj: {
                    valid: false
                }
            };
        }
    }
    private validarCnpj(cnpj: string) {

        // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C%2F%7C%5C-%7C%5Cs
        const cnpjSemMascara = cnpj.replace(/\.|\/|\-|\s/g, '');
        const numeroCnpj = cnpjSemMascara.substring(0, 12);
        const digitoCnpj = cnpjSemMascara.substring(12, 14);

        if (cnpjSemMascara.length !== 14) {
            return false;
        }

        for (let index = 0; index < 9; index++) {
            if ('' + numeroCnpj + digitoCnpj === Array(15).join(String(index))) {
                return false;
            }
        }

        const digito1 = this.calculaDigitoCnpj(numeroCnpj, numeroCnpj.length);
        const digito2 = this.calculaDigitoCnpj(numeroCnpj + '' + digito1, numeroCnpj.length + 1);

        return digitoCnpj.toString() === digito1.toString() + digito2.toString();
    }

    private calculaDigitoCnpj(numero: string, tamanho: number) {
        let soma = 0;
        let pos = tamanho - 7;

        for (let index = tamanho; index >= 1; index--) {
            soma += Number(numero.charAt(tamanho - index)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }

        const modulo = soma % 11;

        return modulo < 2 ? 0 : 11 - modulo;
    }

}
