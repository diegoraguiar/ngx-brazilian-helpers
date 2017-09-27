export class TocantinsService {

  private readonly TAMANHO_IE = 11;
  private readonly TAMANHO_NUMERO = 10;
  private readonly TAMANHO_DIGITOS = 1;

  private readonly PESOS_DIGITO_UM = [9, 8, 0, 0, 7, 6, 5, 4, 3, 2];

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_TO.html
   *
   * @param inscricaoEstadual Número referente a inscrição estadual
   */
  validar(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5C.%7C%5C-%7C%5Cs
    const ieSemMascara = inscricaoEstadual.replace(/\-|\s/g, '');

    if (this.isQuantidadeNumerosInvalida(ieSemMascara)
      || !this.isTipoEmpresaValido(inscricaoEstadual)) {
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

  private isTipoEmpresaValido(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E.%7B2%7D((%3F%3D01)%7C(%3F%3D02)%7C(%3F%3D03)%7C(%3F%3D99)).*%24
    return /^.{2}((?=01)|(?=02)|(?=03)|(?=99)).*$/.test(inscricaoEstadual);
  }

  private calcularDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>) {
    const modulo = 11;
    const posicaoTipoEmpresa = [2, 3];

    let soma = 0;
    for (let indice = 0; indice < digitos.length; indice++) {
      if (!posicaoTipoEmpresa.includes(indice)) {
        soma += Number(digitos.charAt(indice)) * fatoresMultiplicadores[indice];
      }
    }

    const resto = soma % modulo;

    return String(resto <= 1 ? 0 : modulo - resto);
  }

}
