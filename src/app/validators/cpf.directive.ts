import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';

@Directive({
    selector: '[cpf][ngModel], [cpf][formGroupName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CpfValidatorDirective,
            multi: true
        }
    ]
})
export class CpfValidatorDirective implements Validator {

    validate(control: AbstractControl) {
        if (!control.value || this.validarCpf(control.value)) {
            return null;
        } else {
            return {
                cpf: {
                    valid: false
                }
            };
        }
    }

    private validarCpf(cpf: string) {

        // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C%2F%7C%5C-%7C%5Cs
        const cpfSemMascara = cpf.replace(/\.|\-|\s/g, '');
        const numeroCpf = cpfSemMascara.substring(0, 9);
        const digitoCpf = cpfSemMascara.substring(9, 11);

        if (cpfSemMascara.length !== 11) {
            return false;
        }

        for (let index = 0; index < 10; index++) {
            if ('' + numeroCpf + digitoCpf === Array(12).join(String(index))) {
                return false;
            }
        }

        const digito1 = this.calculaDigitoCpf(numeroCpf, numeroCpf.length);
        const digito2 = this.calculaDigitoCpf(numeroCpf + '' + digito1, numeroCpf.length + 1);

        return digitoCpf.toString() === digito1.toString() + digito2.toString();
    }

    private calculaDigitoCpf(numero: string, tamanho: number) {
        let somatoria = 0;

        for (let index = 0; index < tamanho; ++index) {
            somatoria += Number(numero.charAt(index)) * ((tamanho + 1) - index);
        }

        const modulo = somatoria % 11;

        return modulo < 2 ? 0 : 11 - modulo;
    }

}
