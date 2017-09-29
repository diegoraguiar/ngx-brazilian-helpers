export class MinasGeraisService {

  private readonly TAMANHO_IE = 13;
  private readonly TAMANHO_NUMERO = 11;
  private readonly TAMANHO_DIGITOS = 2;

  private readonly PESOS_DIGITO_UM = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  private readonly PESOS_DIGITO_DOIS = [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_MA.html
   *
   * @param inscricaoEstadual Número referente a inscrição estadual
   */
  validar(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C%2F%7C%5C-%7C%5Cs
    const ieSemMascara = inscricaoEstadual.replace(/\.|\/|\-|\s/g, '');

    if (this.isQuantidadeNumerosInvalida(ieSemMascara)) {
      return false;
    }

    const numero = ieSemMascara.substring(ieSemMascara.length - this.TAMANHO_IE, this.TAMANHO_NUMERO);
    const digito = ieSemMascara.substring(this.TAMANHO_NUMERO, ieSemMascara.length);

    const primeiroDigito = this.calcularPrimeiroDigitoVerificador(numero, this.PESOS_DIGITO_UM);
    const segundoDigito = this.calcularSegundoDigitoVerificador(numero.concat(primeiroDigito), this.PESOS_DIGITO_DOIS);

    return digito === primeiroDigito.concat(segundoDigito);
  }

  private isQuantidadeNumerosInvalida(inscricaoEstadual: string) {
    return inscricaoEstadual.length !== this.TAMANHO_IE;
  }

  private calcularPrimeiroDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>) {
    const modulo = 10;

    let digitosComZero = '';
    digitos.split('').forEach((item, posicao) => {
      if (posicao === 3) {
        digitosComZero += '0';
      }
      digitosComZero += item;
    });

    let algarismos = '';
    digitosComZero.split('').forEach((item, posicao) => {
      algarismos += Number(item) * fatoresMultiplicadores[posicao];
    });

    let soma = 0;
    algarismos.split('').forEach(item => {
      soma += Number(item);
    });

    return String((Math.floor(soma / modulo) + 1) * modulo - soma);
  }

  private calcularSegundoDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>) {
    const modulo = 11;
    let soma = 0;

    for (let indice = 0; indice < digitos.length; indice++) {
      soma += Number(digitos.charAt(indice)) * fatoresMultiplicadores[indice];
    }

    const resto = soma % modulo;

    return String(resto <= 1 ? 0 : modulo - resto);
  }

}
