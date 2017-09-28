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

    if (ieSemMascara.length === this.TAMANHO_IE_NOVE_DIGITOS) {
      return this.validarInscricoesCom9Digitos(ieSemMascara);
    } else if (ieSemMascara.length === this.TAMANHO_IE_OITO_DIGITOS) {
      return this.validarInscricoesCom8Digitos(ieSemMascara);
    }

    return false;
  }

  private validarInscricoesCom9Digitos(ie: string) {
    const pesosSegundoDigito = [8, 7, 6, 5, 4, 3, 2];
    const pesosPrimeiroDigito = [9, 8, 7, 6, 5, 4, 3, 2];
    const tamanhoNumero = 7;

    return true;
  }

  private validarInscricoesCom8Digitos(ie: string) {
    const pesosSegundoDigito = [7, 6, 5, 4, 3, 2];
    const pesosPrimeiroDigito = [8, 7, 6, 5, 4, 3, 2];
    const tamanhoNumero = 6;

    let modulo = 10;
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E%5B679%5D
    if (/^[679]/.test(ie)) {
      modulo = 11;
    }

    const numero = ie.substring(ie.length - this.TAMANHO_IE_OITO_DIGITOS, tamanhoNumero);
    const digito = ie.substring(tamanhoNumero, ie.length);

    let segundoDigitoCalculado;
    let soma = 0;
    for (let indice = 0; indice < numero.length; indice++) {
      soma += Number(numero.charAt(indice)) * pesosSegundoDigito[indice];
    }
    let resto = soma % modulo;
    segundoDigitoCalculado = modulo - resto;
    if (modulo === 10 && resto === 0) {
      segundoDigitoCalculado = 0;
    } else if (modulo === 11 && resto <= 1) {
      segundoDigitoCalculado = 0;
    }

    let primeiroDigitoCalculado;
    soma = 0;

    for (let indice = 0; indice < numero.concat(segundoDigitoCalculado).length; indice++) {
      soma += Number(numero.concat(segundoDigitoCalculado).charAt(indice)) * pesosPrimeiroDigito[indice];
    }

    resto = soma % modulo;
    primeiroDigitoCalculado = modulo - resto;

    return digito === primeiroDigitoCalculado.toString().concat(segundoDigitoCalculado);
  }

}
