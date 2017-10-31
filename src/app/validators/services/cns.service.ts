import { Injectable } from '@angular/core';

@Injectable()
export class CnsService {

  private readonly TAMANHO_CNS = 15;
  private readonly NUMEROS_CNS = 11;

  validar(cns: string) {

    if (!this.isPrimeirosDigitosValidos(cns)
      || this.isQuantidadeNumerosInvalida(cns)
      || this.isNumerosIguais(cns)) {
      return false;
    }

    if (/^(1|2)/.test(cns)) {
      return this.validarCns(cns);
    } else {
      return this.validarCnsProvisorio(cns);
    }
  }

  private isQuantidadeNumerosInvalida(cns: string) {
    return cns.length !== this.TAMANHO_CNS;
  }

  private isNumerosIguais(cns: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E(%5B0-9%5D)%5C1*%24
    return /^([0-9])\1*$/.test(cns);
  }

  private isPrimeirosDigitosValidos(cns: string) {
    // https://jex.im/regulex/#!flags=&re=%5E(1%7C2%7C7%7C8%7C9)
    return /^(1|2|7|8|9)/.test(cns);
  }

  private validarCns(cns: string) {
    const numero = cns.substring(cns.length - this.TAMANHO_CNS, this.NUMEROS_CNS);
    const pesosDigito = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5];
    const modulo = 11;

    let soma = 0;
    for (let indice = 0; indice < numero.length; indice++) {
      soma += Number(numero.charAt(indice)) * pesosDigito[indice];
    }

    const resto = soma % modulo;
    const resultado = modulo - resto;
    let digitoCalculado = (resultado !== 11) ? resultado : 0;
    let digito = '000' + digitoCalculado;

    if (resultado === 10) {
      soma += 2;
      digitoCalculado = modulo - (soma % modulo);
      digito = '001' + digitoCalculado;
    }

    return cns === numero.concat(digito);
  }

  private validarCnsProvisorio(cns: string) {
    const pesosDigito = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const modulo = 11;

    let soma = 0;
    for (let indice = 0; indice < cns.length; indice++) {
      soma += Number(cns.charAt(indice)) * pesosDigito[indice];
    }

    const resto = soma % modulo;

    return resto === 0;
  }

}
