export class BahiaService {

  private readonly TAMANHO_IE_OITO_DIGITOS = 8;
  private readonly TAMANHO_IE_NOVE_DIGITOS = 9;

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_BA.html
   *
   * @param inscricaoEstadual Número referente a inscrição estadual
   */
  validar(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C-%7C%5Cs
    const ieSemMascara = inscricaoEstadual.replace(/\.|\/|\-|\s/g, '');

    if (this.isQuantidadeNumerosInvalida(ieSemMascara)) {
      return false;
    }

    let pesosSegundoDigito = [7, 6, 5, 4, 3, 2];
    let pesosPrimeiroDigito = [8, 7, 6, 5, 4, 3, 2];
    let tamanhoNumero = 6;

    if (ieSemMascara.length === this.TAMANHO_IE_NOVE_DIGITOS) {
      pesosSegundoDigito = [8, 7, 6, 5, 4, 3, 2];
      pesosPrimeiroDigito = [9, 8, 7, 6, 5, 4, 3, 2];
      tamanhoNumero = 7;
    }

    let modulo = 10;
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E%5B679%5D
    if (/^[679]/.test(ieSemMascara)) {
      modulo = 11;
    }

    const numero = ieSemMascara.substring(0, tamanhoNumero);
    const digito = ieSemMascara.substring(tamanhoNumero, ieSemMascara.length);

    const segundoDigito = this.calcularDigitoVerificador(numero, pesosSegundoDigito, modulo, false);
    const primeiroDigito = this.calcularDigitoVerificador(numero.concat(segundoDigito), pesosPrimeiroDigito, modulo, true);

    return digito === primeiroDigito.concat(segundoDigito);
  }

  private isQuantidadeNumerosInvalida(inscricaoEstadual: string) {
    return inscricaoEstadual.length !== this.TAMANHO_IE_OITO_DIGITOS && inscricaoEstadual.length !== this.TAMANHO_IE_NOVE_DIGITOS;
  }

  private calcularDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>, modulo: number, isPrimeiroDigito: boolean) {
    let soma = 0;
    for (let indice = 0; indice < digitos.length; indice++) {
      soma += Number(digitos.charAt(indice)) * fatoresMultiplicadores[indice];
    }

    const resto = soma % modulo;
    const digito = modulo - resto;

    if (isPrimeiroDigito) {
      return digitos.length === 7 ? String(digito) : String(resto);
    } else {
      return modulo === 10 ? String(resto === 0 ? 0 : digito) : String(resto <= 1 ? 0 : digito);
    }
  }

}
