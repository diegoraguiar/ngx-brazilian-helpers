export class CnpjService {

  validar(cnpj: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C-%7C%5Cs
    const cnpjSemMascara = cnpj.replace(/\.|\/|\-|\s/g, '');

    if (this.isQuantidadeNumerosInvalida(cnpjSemMascara) || this.isNumerosIguais(cnpjSemMascara)) {
      return false;
    }

    const numero = cnpjSemMascara.substring(0, 12);
    const digito = cnpjSemMascara.substring(12, 14);
    const primeiroDigito = this.calcularDigitoVerificador(numero, 12);
    const segundoDigito = this.calcularDigitoVerificador(numero.concat(primeiroDigito), 13);

    return digito === primeiroDigito.concat(segundoDigito);
  }

  private isQuantidadeNumerosInvalida(cnpj: string) {
    return cnpj.length !== 14;
  }

  private isNumerosIguais(cnpj: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E(%5B0-9%5D)%5C1*%24
    return /^([0-9])\1*$/.test(cnpj);
  }

  private calcularDigitoVerificador(numero: string, tamanho: number) {
    let somatoriaValores = 0;
    let pos = tamanho - 7;

    for (let indice = tamanho; indice >= 1; indice--) {
      somatoriaValores += Number(numero.charAt(tamanho - indice)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    const resto = somatoriaValores % 11;

    return String(resto < 2 ? 0 : 11 - resto);
  }

}
