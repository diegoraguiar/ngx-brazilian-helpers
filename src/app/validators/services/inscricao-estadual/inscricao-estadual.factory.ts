import { PiauiService } from './piaui.service';
import { RoraimaService } from './roraima.service';
import { RondoniaService } from './rondonia.service';
import { RioDeJaneiroService } from './rio-de-janeiro.service';
import { RioGrandeDoNorteService } from './rio-grande-do-norte.service';
import { RioGrandeDoSulService } from './rio-grande-do-sul.service';
import { SantaCatarinaService } from './santa-catarina.service';
import { SaoPauloService } from './sao-paulo.service';
import { SergipeService } from './sergipe.service';
import { TocantinsService } from './tocantins.service';
import { PernambucoService } from './pernambuco.service';
import { ParanaService } from './parana.service';
import { ParaibaService } from './paraiba.service';
import { ParaService } from './para.service';
import { MinasGeraisService } from './minas-gerais.service';
import { MatoGrossoSulService } from './mato-grosso-sul.service';
import { MatoGrossoService } from './mato-grosso.service';
import { MaranhaoService } from './maranhao.service';
import { GoiasService } from './goias.service';
import { EspiritoSantoService } from './espirito-santo.service';
import { DistritoFederalService } from './distrito-federal.service';
import { CearaService } from './ceara.service';
import { BahiaService } from './bahia.service';
import { AmazonasService } from './amazonas.service';
import { AmapaService } from './amapa.service';
import { AcreService } from './acre.service';
import { AlagoasService } from './alagoas.service';

import { InscricaoEstadual } from './inscricao-estadual.interface';

export class InscricaoEstadualFactory {

  static readonly ACRE = 'AC';
  static readonly ALAGOAS = 'AL';
  static readonly AMAPA = 'AP';
  static readonly AMAZONAS = 'AM';
  static readonly BAHIA = 'BA';
  static readonly CEARA = 'CE';
  static readonly DISTRITO_FEDERAL = 'DF';
  static readonly ESPIRITO_SANTO = 'ES';
  static readonly GOIAS = 'GO';
  static readonly MARANHAO = 'MA';
  static readonly MATO_GROSSO = 'MT';
  static readonly MATO_GROSSO_DO_SUL = 'MS';
  static readonly MINAS_GERAIS = 'MG';
  static readonly PARA = 'PA';
  static readonly PARAIBA = 'PB';
  static readonly PARANA = 'PR';
  static readonly PERNAMBUCO = 'PE';
  static readonly PIAUI = 'PI';
  static readonly RORAIMA = 'RR';
  static readonly RONDONIA = 'RO';
  static readonly RIO_DE_JANEIRO = 'RJ';
  static readonly RIO_GRANDE_DO_NORTE = 'RN';
  static readonly RIO_GRANDE_DO_SUL = 'RS';
  static readonly SANTA_CATARINA = 'SC';
  static readonly SAO_PAULO = 'SP';
  static readonly SERGIPE = 'SE';
  static readonly TOCANTINS = 'TO';

  static criaInstancia(sigla: string): InscricaoEstadual {
    switch (sigla) {
      case InscricaoEstadualFactory.ACRE:
        return new AcreService();
      case InscricaoEstadualFactory.ALAGOAS:
        return new AlagoasService();
      case InscricaoEstadualFactory.AMAPA:
        return new AmapaService();
      case InscricaoEstadualFactory.AMAZONAS:
        return new AmazonasService();
      case InscricaoEstadualFactory.BAHIA:
        return new BahiaService();
      case InscricaoEstadualFactory.CEARA:
        return new CearaService();
      case InscricaoEstadualFactory.DISTRITO_FEDERAL:
        return new DistritoFederalService();
      case InscricaoEstadualFactory.ESPIRITO_SANTO:
        return new EspiritoSantoService();
      case InscricaoEstadualFactory.GOIAS:
        return new GoiasService();
      case InscricaoEstadualFactory.MARANHAO:
        return new MaranhaoService();
      case InscricaoEstadualFactory.MATO_GROSSO:
        return new MatoGrossoService();
      case InscricaoEstadualFactory.MATO_GROSSO_DO_SUL:
        return new MatoGrossoSulService();
      case InscricaoEstadualFactory.MINAS_GERAIS:
        return new MinasGeraisService();
      case InscricaoEstadualFactory.PARA:
        return new ParaService();
      case InscricaoEstadualFactory.PARAIBA:
        return new ParaibaService();
      case InscricaoEstadualFactory.PARANA:
        return new ParanaService();
      case InscricaoEstadualFactory.PERNAMBUCO:
        return new PernambucoService();
      case InscricaoEstadualFactory.PIAUI:
        return new PiauiService();
      case InscricaoEstadualFactory.RORAIMA:
        return new RoraimaService();
      case InscricaoEstadualFactory.RONDONIA:
        return new RondoniaService();
      case InscricaoEstadualFactory.RIO_DE_JANEIRO:
        return new RioDeJaneiroService();
      case InscricaoEstadualFactory.RIO_GRANDE_DO_NORTE:
        return new RioGrandeDoNorteService();
      case InscricaoEstadualFactory.RIO_GRANDE_DO_SUL:
        return new RioGrandeDoSulService();
      case InscricaoEstadualFactory.SANTA_CATARINA:
        return new SantaCatarinaService();
      case InscricaoEstadualFactory.SAO_PAULO:
        return new SaoPauloService();
      case InscricaoEstadualFactory.SERGIPE:
        return new SergipeService();
      case InscricaoEstadualFactory.TOCANTINS:
        return new TocantinsService();
      default:
        return null;
    }
  }
}
