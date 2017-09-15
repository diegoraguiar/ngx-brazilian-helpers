export class NitService {

  validar(nit: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C-%7C%5Cs
    const nitSemMascara = nit.replace(/\.|\-|\s/g, '');

    if (this.isQuantidadeNumerosInvalida(nitSemMascara) || this.isNumerosIguais(nitSemMascara)) {
      return false;
    }

    const numero = nitSemMascara.substring(0, 10);
    const digito = nitSemMascara.substring(10, 11);
    const digitoCalculado = this.calcularDigitoVerificador(numero, numero.length);

    return digito === digitoCalculado;
  }

  private isQuantidadeNumerosInvalida(nit: string) {
    return nit.length !== 11;
  }

  private isNumerosIguais(nit: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E(%5B0-9%5D)%5C1*%24
    return /^([0-9])\1*$/.test(nit);
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
    const resultado = 11 - resto;

    return String(resultado > 9 ? 0 : resultado);
  }

}
