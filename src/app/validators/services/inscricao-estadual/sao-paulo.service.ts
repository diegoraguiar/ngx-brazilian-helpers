export class SaoPauloService {

  private readonly TAMANHO_IE_DOZE_DIGITOS = 12;
  private readonly TAMANHO_IE_TREZE_DIGITOS = 13;

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_SP.html
   *
   * @param inscricaoEstadual Número referente a inscrição estadual
   */
  validar(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C%2F%7C%5C-%7C%5Cs
    const ieSemMascara = inscricaoEstadual.replace(/\.|\/|\-|\s/g, '');

    if (ieSemMascara.length === this.TAMANHO_IE_DOZE_DIGITOS) {
      return this.validarInscricoesCom12Digitos(ieSemMascara);
    } else if (ieSemMascara.length === this.TAMANHO_IE_TREZE_DIGITOS) {
      return /^P/.test(ieSemMascara) && this.validarInscricoesCom13Digitos(ieSemMascara);
    }

    return false;
  }

  private validarInscricoesCom12Digitos(ie: string) {
    const posicaoPrimeiroDigito = 8;
    const posicaoSegundoDigito = 11;
    const pesosPrimeiroDigito = [1, 3, 4, 5, 6, 7, 8, 10];
    const pesosSegundoDigito = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];

    const primeiroDigito = ie.charAt(posicaoPrimeiroDigito);
    const primeiroDigitoCalculado = this.calcularDigitoVerificador(ie.substring(0, posicaoPrimeiroDigito), pesosPrimeiroDigito);

    const segundoDigito = ie.charAt(posicaoSegundoDigito);
    const segundoDigitoCalculado = this.calcularDigitoVerificador(ie.substring(0, posicaoSegundoDigito), pesosSegundoDigito);

    return primeiroDigito === primeiroDigitoCalculado && segundoDigito === segundoDigitoCalculado;
  }

  private validarInscricoesCom13Digitos(ie: string) {
    const posicaoDigito = 9;
    const pesosDigito = [1, 3, 4, 5, 6, 7, 8, 10];

    const digito = ie.charAt(posicaoDigito);
    const digitoCalculado = this.calcularDigitoVerificador(ie.substring(1, posicaoDigito), pesosDigito);

    return digito === digitoCalculado;
  }

  private calcularDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>) {
    const modulo = 11;
    let soma = 0;

    for (let indice = 0; indice < digitos.length; indice++) {
      soma += Number(digitos.charAt(indice)) * fatoresMultiplicadores[indice];
    }

    const resto = soma % modulo;

    return String(resto).slice(-1);
  }

}
