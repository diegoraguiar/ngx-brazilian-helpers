export class CpfService {

  private readonly TAMANHO_CPF = 11;

  validar(cpf: string): boolean {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C-%7C%5Cs
    const cpfSemMascara = cpf.replace(/\.|\-|\s/g, '');

    if (this.isQuantidadeNumerosInvalida(cpfSemMascara) || this.isNumerosIguais(cpfSemMascara)) {
      return false;
    }

    const numero = cpfSemMascara.substring(0, 9);
    const digito = cpfSemMascara.substring(9, 11);
    const primeiroDigito = this.calcularDigitoVerificador(numero, 10);
    const segundoDigito = this.calcularDigitoVerificador(numero.concat(primeiroDigito), 11);

    return digito === primeiroDigito.concat(segundoDigito);
  }

  private isQuantidadeNumerosInvalida(cpf: string) {
    return cpf.length !== this.TAMANHO_CPF;
  }

  private isNumerosIguais(cpf: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E(%5B0-9%5D)%5C1*%24
    return /^([0-9])\1*$/.test(cpf);
  }

  private calcularDigitoVerificador(digitos: string, constanteInicial: number) {
    let somatoriaValores = 0;
    const divisor = 11;

    for (let indice = 0; indice < constanteInicial; indice++) {
      somatoriaValores += Number(digitos.charAt(indice)) * (constanteInicial - indice);
    }

    const resto = somatoriaValores % divisor;

    return String(resto < 2 ? 0 : divisor - resto);
  }

}
