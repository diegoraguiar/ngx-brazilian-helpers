export class RenavamService {

  private readonly TAMANHO_PADRAO_NOVO = 11;
  private readonly TAMANHO_PADRAO_ANTIGO = 9;

  validar(renavam: string) {

    if (this.isQuantidadeNumerosInvalida(renavam) || this.isNumerosIguais(renavam)) {
      return false;
    }

    renavam = this.formataRenavamPadraoAntigo(renavam);

    const numero = renavam.substring(0, 10);
    const digito = renavam.substring(10, 11);
    const digitoCalculado = this.calcularDigitoVerificador(numero.split('').reverse().join(''), 8);

    return digito === digitoCalculado;
  }

  private isQuantidadeNumerosInvalida(renavam: string) {
    return renavam.length !== this.TAMANHO_PADRAO_NOVO && renavam.length !== this.TAMANHO_PADRAO_ANTIGO;
  }

  private isNumerosIguais(renavam: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E(%5B0-9%5D)%5C1*%24
    return /^([0-9])\1*$/.test(renavam);
  }

  private formataRenavamPadraoAntigo(renavam: string) {
    if (renavam.length === this.TAMANHO_PADRAO_ANTIGO) {
      renavam = '00'.concat(renavam);
    }

    return renavam;
  }

  private calcularDigitoVerificador(numero: string, tamanho: number) {
    let somatoriaValores = 0;
    const divisor = 11;

    for (let indice = 0; indice < tamanho; indice++) {
      somatoriaValores += Number(numero.charAt(indice)) * (indice + 2);
    }

    somatoriaValores += Number(numero.charAt(8)) * 2;
    somatoriaValores += Number(numero.charAt(9)) * 3;

    const resto = somatoriaValores % divisor;
    const digitoCalculado = divisor - resto;

    return String(digitoCalculado >= 10 ? 0 : digitoCalculado);
  }

}
