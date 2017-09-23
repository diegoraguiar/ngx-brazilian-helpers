export class RoraimaService {

  private readonly TAMANHO_IE = 9;
  private readonly TAMANHO_NUMERO = 8;
  private readonly TAMANHO_DIGITOS = 1;

  private readonly PESOS_DIGITO_UM = [1, 2, 3, 4, 5, 6, 7, 8];

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_RR.html
   *
   * @param inscricaoEstadual Número referente a inscrição estadual
   */
  validar(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C-%7C%5Cs
    const ieSemMascara = inscricaoEstadual.replace(/\-|\s/g, '');

    if (!this.isPrimeirosDigitosDoisQuatro(ieSemMascara)
      || this.isQuantidadeNumerosInvalida(ieSemMascara)) {
      return false;
    }

    const numero = ieSemMascara.substring(ieSemMascara.length - this.TAMANHO_IE, this.TAMANHO_NUMERO);
    const digito = ieSemMascara.substring(this.TAMANHO_NUMERO, ieSemMascara.length);

    const digitoCalculado = this.calcularDigitoVerificador(numero, this.PESOS_DIGITO_UM);

    return digito === digitoCalculado;
  }

  private isPrimeirosDigitosDoisQuatro(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E24
    return /^24/.test(inscricaoEstadual);
  }

  private isQuantidadeNumerosInvalida(inscricaoEstadual: string) {
    return inscricaoEstadual.length !== this.TAMANHO_IE;
  }

  private calcularDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>) {
    const modulo = 9;
    const multiplicador = 10;
    let soma = 0;

    for (let indice = 0; indice < digitos.length; indice++) {
      soma += Number(digitos.charAt(indice)) * fatoresMultiplicadores[indice];
    }

    const resto = soma % modulo;

    return String(resto);
  }

}
