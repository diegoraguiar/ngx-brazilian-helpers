export class MatoGrossoService {

  private readonly TAMANHO_IE = 11;
  private readonly TAMANHO_NUMERO = 10;
  private readonly TAMANHO_DIGITOS = 1;

  private readonly PESOS_DIGITO_UM = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_MT.html
   *
   * @param inscricaoEstadual Número referente a inscrição estadual
   */
  validar(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C-%7C%5Cs
    const ieSemMascara = inscricaoEstadual.replace(/\-|\s/g, '');

    if (this.isQuantidadeNumerosInvalida(ieSemMascara)) {
      return false;
    }

    const numero = ieSemMascara.substring(ieSemMascara.length - this.TAMANHO_IE, this.TAMANHO_NUMERO);
    const digito = ieSemMascara.substring(this.TAMANHO_NUMERO, ieSemMascara.length);

    const digitoCalculado = this.calcularDigitoVerificador(numero, this.PESOS_DIGITO_UM);

    return digito === digitoCalculado;
  }

  private isQuantidadeNumerosInvalida(inscricaoEstadual: string) {
    return inscricaoEstadual.length !== this.TAMANHO_IE;
  }

  private calcularDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>) {
    const modulo = 11;
    let soma = 0;

    for (let indice = 0; indice < digitos.length; indice++) {
      soma += Number(digitos.charAt(indice)) * fatoresMultiplicadores[indice];
    }

    const resto = soma % modulo;

    return String(resto <= 1 ? 0 : modulo - resto);
  }

}
