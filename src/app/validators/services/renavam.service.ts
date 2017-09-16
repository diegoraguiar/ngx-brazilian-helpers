export class RenavamService {

  validar(renavam: string) {

    if (this.isQuantidadeNumerosInvalida(renavam) || this.isNumerosIguais(renavam)) {
      return false;
    }

    renavam = this.formataRenavamPadraoAntigo(renavam);

    const numero = renavam.substring(0, 10);
    const digito = renavam.substring(10, 11);
    const digitoCalculado = this.calcularDigitoVerificador(numero.split('').reverse().join(''));

    return digito === digitoCalculado;
  }

  private isQuantidadeNumerosInvalida(renavam: string) {
    return renavam.length !== 11 && renavam.length !== 9;
  }

  private isNumerosIguais(renavam: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E(%5B0-9%5D)%5C1*%24
    return /^([0-9])\1*$/.test(renavam);
  }

  private formataRenavamPadraoAntigo(renavam: string) {
    if (renavam.length === 9) {
      renavam = '00'.concat(renavam);
    }

    return renavam;
  }

  private calcularDigitoVerificador(numero: string, tamanho: number = 8) {
    let somatoriaValores = 0;

    for (let indice = 0; indice < tamanho; indice++) {
      somatoriaValores += Number(numero.charAt(indice)) * (indice + 2);
    }

    somatoriaValores += Number(numero.charAt(8)) * 2;
    somatoriaValores += Number(numero.charAt(9)) * 3;

    const resto = somatoriaValores % 11;
    const digitoCalculado = 11 - resto;

    return String(digitoCalculado >= 10 ? 0 : digitoCalculado);
  }

}
