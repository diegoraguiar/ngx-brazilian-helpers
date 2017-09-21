export class AmazonasService {

  private readonly TAMANHO_IE = 9;
  private readonly TAMANHO_NUMERO = 8;
  private readonly TAMANHO_DIGITOS = 1;

  private readonly PESOS_DIGITO_UM = [9, 8, 7, 6, 5, 4, 3, 2];

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_AM.html
   *
   * @param inscricaoEstadual Número referente a inscrição estadual
   */
  validar(inscricaoEstadual: string) {

    if (this.isQuantidadeNumerosInvalida(inscricaoEstadual)) {
      return false;
    }

    const numero = inscricaoEstadual.substring(inscricaoEstadual.length - this.TAMANHO_IE, this.TAMANHO_NUMERO);
    const digito = inscricaoEstadual.substring(this.TAMANHO_NUMERO, inscricaoEstadual.length);

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

    let digito;
    if (soma < modulo) {
      digito = modulo - soma;
    } else {
      const resto = soma % modulo;
      if (resto <= 1) {
        digito = 0;
      } else {
        digito = modulo - resto;
      }
    }

    return String(digito);
  }

}
