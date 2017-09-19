export class TitutoEleitorService {

  private readonly TAMANHO_TITULO_ELEITOR = 12;

  validar(tituloEleitor: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5Cs
    const tituloEleitorSemMascara = tituloEleitor.replace(/\.|\s/g, '');

    if (this.isQuantidadeNumerosInvalida(tituloEleitorSemMascara) || this.isNumerosIguais(tituloEleitorSemMascara)) {
      return false;
    }

    const digito = tituloEleitorSemMascara.substring(10, 12);
    const primeiroDigito = this.calcularDigitoVerificador(tituloEleitorSemMascara.substring(0, 8), 2);
    const segundoDigito = this.calcularDigitoVerificador(tituloEleitorSemMascara.substring(8, 10).concat(primeiroDigito), 7);

    return digito === primeiroDigito.concat(segundoDigito);
  }

  private isQuantidadeNumerosInvalida(tituloEleitor: string) {
    return tituloEleitor.length !== this.TAMANHO_TITULO_ELEITOR;
  }

  private isNumerosIguais(tituloEleitor: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E(%5B0-9%5D)%5C1*%24
    return /^([0-9])\1*$/.test(tituloEleitor);
  }

  private calcularDigitoVerificador(numero: string, constanteInicial: number) {
    let somatoriaValores = 0;
    const divisor = 11;

    for (let indice = 0; indice < numero.length; indice++) {
      somatoriaValores += Number(numero.charAt(indice)) * constanteInicial;
      constanteInicial++;
    }

    return String(somatoriaValores % divisor);
  }

}
