export class AmapaService {

  private readonly TAMANHO_IE = 9;
  private readonly TAMANHO_NUMERO = 8;
  private readonly TAMANHO_DIGITOS = 1;

  private readonly PESOS_DIGITO_UM = [9, 8, 7, 6, 5, 4, 3, 2];

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_AP.html
   *
   * @param inscricaoEstadual Número referente a inscrição estadual
   */
  validar(inscricaoEstadual: string) {

    if (!this.isPrimeirosDigitosZeroTres(inscricaoEstadual)
      || this.isQuantidadeNumerosInvalida(inscricaoEstadual)) {
      return false;
    }

    const numero = inscricaoEstadual.substring(inscricaoEstadual.length - this.TAMANHO_IE, this.TAMANHO_NUMERO);
    const digito = inscricaoEstadual.substring(this.TAMANHO_NUMERO, inscricaoEstadual.length);

    const digitoCalculado = this.calcularDigitoVerificador(numero, this.PESOS_DIGITO_UM);

    return digito === digitoCalculado;
  }

  private isPrimeirosDigitosZeroTres(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E24
    return /^03/.test(inscricaoEstadual);
  }

  private isQuantidadeNumerosInvalida(inscricaoEstadual: string) {
    return inscricaoEstadual.length !== this.TAMANHO_IE;
  }

  private calcularDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>) {
    const pesoDigito = this.calculaPesoPorFaixa(digitos);
    const modulo = 11;
    const multiplicador = 10;

    let soma = pesoDigito.p;
    for (let indice = 0; indice < digitos.length; indice++) {
      soma += Number(digitos.charAt(indice)) * fatoresMultiplicadores[indice];
    }

    const resto = soma % modulo;
    let digito = modulo - resto;
    if (digito === 10) {
      digito = 0;
    } else if (digito === 11) {
      digito = pesoDigito.d;
    }
    return String(digito);
  }

  private calculaPesoPorFaixa(digitos: string) {
    const pesoDigito: { p?: number, d?: number } = { p: 0, d: 0 };
    const faixa = Number(digitos);
    if (faixa >= 3000001 && faixa <= 3017000) {
      pesoDigito.p = 5;
      pesoDigito.d = 0;
    }
    if (faixa >= 3017001 && faixa <= 3019022) {
      pesoDigito.p = 9;
      pesoDigito.d = 1;
    }
    return pesoDigito;
  }

}
