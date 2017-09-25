export class GoiasService {

  private readonly TAMANHO_IE = 9;
  private readonly TAMANHO_NUMERO = 8;
  private readonly TAMANHO_DIGITOS = 1;

  private readonly PESOS_DIGITO_UM = [9, 8, 7, 6, 5, 4, 3, 2];

  /**
  * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_GO.html
  *
  * @param inscricaoEstadual Número referente a inscrição estadual
  */
  validar(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C-%7C%5Cs
    const ieSemMascara = inscricaoEstadual.replace(/\.|\-|\s/g, '');

    if (!this.isPrimeirosDigitosValidos(ieSemMascara)
      || this.isQuantidadeNumerosInvalida(ieSemMascara)) {
      return false;
    }

    const numero = ieSemMascara.substring(ieSemMascara.length - this.TAMANHO_IE, this.TAMANHO_NUMERO);
    const digito = ieSemMascara.substring(this.TAMANHO_NUMERO, ieSemMascara.length);

    const digitoCalculado = this.calcularDigitoVerificador(numero, this.PESOS_DIGITO_UM);

    if (Number(numero) === 11094402 && (digitoCalculado === '1' || digitoCalculado === '0')) {
      return true;
    }

    return digito === digitoCalculado;
  }

  private isQuantidadeNumerosInvalida(inscricaoEstadual: string) {
    return inscricaoEstadual.length !== this.TAMANHO_IE;
  }

  private isPrimeirosDigitosValidos(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E(10%7C11%7C15)
    return /^(10|11|15)/.test(inscricaoEstadual);
  }

  private calcularDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>) {
    const modulo = 11;
    let soma = 0;

    for (let indice = 0; indice < digitos.length; indice++) {
      soma += Number(digitos.charAt(indice)) * fatoresMultiplicadores[indice];
    }

    const resto = soma % modulo;
    let digito = modulo - resto;
    if (resto === 0) {
      digito = 0;
    } else if (resto === 1) {
      if (Number(digitos) >= 10103105 && Number(digitos) <= 10119997) {
        digito = 1;
      } else {
        digito = 0;
      }
    }

    return String(digito);
  }

}
