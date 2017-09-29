export class AlagoasService {

  private readonly TAMANHO_IE = 9;
  private readonly TAMANHO_NUMERO = 8;
  private readonly TAMANHO_DIGITOS = 1;

  private readonly PESOS_DIGITO_UM = [9, 8, 7, 6, 5, 4, 3, 2];

  /**
   * Regra de validação aplicada: http://www.sintegra.gov.br/Cad_Estados/cad_AL.html
   *
   * @param inscricaoEstadual Número referente a inscrição estadual
   */
  validar(inscricaoEstadual: string) {

    if (!this.isPrimeirosDigitosDoisQuatro(inscricaoEstadual)
      || !this.isTipoEmpresaValido(inscricaoEstadual)
      || this.isQuantidadeNumerosInvalida(inscricaoEstadual)) {
      return false;
    }

    const numero = inscricaoEstadual.substring(inscricaoEstadual.length - this.TAMANHO_IE, this.TAMANHO_NUMERO);
    const digito = inscricaoEstadual.substring(this.TAMANHO_NUMERO, inscricaoEstadual.length);

    const digitoCalculado = this.calcularDigitoVerificador(numero, this.PESOS_DIGITO_UM);

    return digito === digitoCalculado;
  }

  private isPrimeirosDigitosDoisQuatro(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E24
    return /^24/.test(inscricaoEstadual);
  }

  private isQuantidadeNumerosInvalida(inscricaoEstadual: string) {
    return inscricaoEstadual.length !== this.TAMANHO_IE;
  }

  private isTipoEmpresaValido(inscricaoEstadual: string) {
    // https://jex.im/regulex/#!embed=false&flags=&re=%5E.%7B2%7D((%3F%3D0)%7C(%3F%3D3)%7C(%3F%3D5)%7C(%3F%3D7)%7C(%3F%3D8)).*%24
    return /^.{2}((?=0)|(?=3)|(?=5)|(?=7)|(?=8)).*$/.test(inscricaoEstadual);
  }

  private calcularDigitoVerificador(digitos: string, fatoresMultiplicadores: Array<number>) {
    const modulo = 11;
    const multiplicador = 10;
    let soma = 0;

    for (let indice = 0; indice < digitos.length; indice++) {
      soma += Number(digitos.charAt(indice)) * fatoresMultiplicadores[indice];
    }

    const produto = soma * multiplicador;
    const resto = produto % modulo;

    return String(resto === 10 ? 0 : resto);
  }

}
