export class PernambucoService {

  private readonly TAMANHO_IE = 9;
  private readonly TAMANHO_NUMERO = 7;
  private readonly TAMANHO_DIGITOS = 2;

  private readonly PESOS_DIGITO_UM = [8, 7, 6, 5, 4, 3, 2];
  private readonly PESOS_DIGITO_DOIS = [9, 8, 7, 6, 5, 4, 3, 2];

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_PE.html
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

    const primeiroDigito = this.calcularDigitoVerificador(numero, this.PESOS_DIGITO_UM);
    const segundoDigito = this.calcularDigitoVerificador(numero.concat(primeiroDigito), this.PESOS_DIGITO_DOIS);

    return digito === primeiroDigito.concat(segundoDigito);
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
    const resultado = modulo - resto;

    return String(resto <= 1 ? 0 : resultado);
  }

}
