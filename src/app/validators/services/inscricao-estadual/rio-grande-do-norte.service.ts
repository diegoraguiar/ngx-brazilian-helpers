export class RioGrandeDoNorteService {

  private readonly TAMANHO_IE_NOVE_DIGITOS = 9;
  private readonly TAMANHO_IE_DEZ_DIGITOS = 10;
  private readonly TAMANHO_DIGITOS = 1;

  private readonly PESOS_DIGITO_NOVE_DIGITOS = [9, 8, 7, 6, 5, 4, 3, 2];
  private readonly PESOS_DIGITO_DEZ_DIGITOS = [10, 9, 8, 7, 6, 5, 4, 3, 2];

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_RN.html
   *
   * @param inscricaoEstadual Número referente a inscrição estadual
   */
  validar(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C-%7C%5Cs
    const ieSemMascara = inscricaoEstadual.replace(/\.|\-|\s/g, '');

    if (!this.isPrimeirosDigitosDoisZero(ieSemMascara)
      || this.isQuantidadeNumerosInvalida(ieSemMascara)) {
      return false;
    }

    const numero = ieSemMascara.substring(0, ieSemMascara.length - this.TAMANHO_DIGITOS);
    const digito = ieSemMascara.substring(ieSemMascara.length - this.TAMANHO_DIGITOS, ieSemMascara.length);

    let digitoCalculado;
    if (ieSemMascara.length === this.TAMANHO_IE_NOVE_DIGITOS) {
      digitoCalculado = this.calcularDigitoVerificador(numero, this.PESOS_DIGITO_NOVE_DIGITOS);
    } else {
      digitoCalculado = this.calcularDigitoVerificador(numero, this.PESOS_DIGITO_DEZ_DIGITOS);
    }

    return digito === digitoCalculado;
  }

  private isQuantidadeNumerosInvalida(inscricaoEstadual: string) {
    return inscricaoEstadual.length !== this.TAMANHO_IE_NOVE_DIGITOS && inscricaoEstadual.length !== this.TAMANHO_IE_DEZ_DIGITOS;
  }

  private isPrimeirosDigitosDoisZero(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E20
    return /^20/.test(inscricaoEstadual);
  }

  private calcularDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>) {
    const modulo = 11;
    const multiplicador = 10;

    let soma = 0;
    for (let indice = 0; indice < digitos.length; indice++) {
      soma += Number(digitos.charAt(indice)) * fatoresMultiplicadores[indice];
    }

    const resto = (soma * multiplicador) % modulo;

    return String(resto === 10 ? 0 : resto);
  }

}
