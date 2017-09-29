import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

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

describe('Service: InscricaoEstadualFactory', () => {

  it('deve ter uma instancia criada para o estado ACRE', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.ACRE);
    expect(instancia instanceof AcreService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado ALAGOAS', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.ALAGOAS);
    expect(instancia instanceof AlagoasService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado AMAPA', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.AMAPA);
    expect(instancia instanceof AmapaService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado AMAZONAS', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.AMAZONAS);
    expect(instancia instanceof AmazonasService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado BAHIA', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.BAHIA);
    expect(instancia instanceof BahiaService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado CEARA', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.CEARA);
    expect(instancia instanceof CearaService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado DISTRITO_FEDERAL', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.DISTRITO_FEDERAL);
    expect(instancia instanceof DistritoFederalService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado ESPIRITO_SANTO', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.ESPIRITO_SANTO);
    expect(instancia instanceof EspiritoSantoService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado GOIAS', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.GOIAS);
    expect(instancia instanceof GoiasService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado MARANHAO', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.MARANHAO);
    expect(instancia instanceof MaranhaoService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado MATO_GROSSO', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.MATO_GROSSO);
    expect(instancia instanceof MatoGrossoService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado MATO_GROSSO_DO_SUL', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.MATO_GROSSO_DO_SUL);
    expect(instancia instanceof MatoGrossoSulService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado MINAS_GERAIS', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.MINAS_GERAIS);
    expect(instancia instanceof MinasGeraisService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado PARA', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.PARA);
    expect(instancia instanceof ParaService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado PARAIBA', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.PARAIBA);
    expect(instancia instanceof ParaibaService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado PARANA', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.PARANA);
    expect(instancia instanceof ParanaService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado PERNAMBUCO', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.PERNAMBUCO);
    expect(instancia instanceof PernambucoService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado PIAUI', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.PIAUI);
    expect(instancia instanceof PiauiService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado RORAIMA', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.RORAIMA);
    expect(instancia instanceof RoraimaService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado RONDONIA', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.RONDONIA);
    expect(instancia instanceof RondoniaService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado RIO_DE_JANEIRO', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.RIO_DE_JANEIRO);
    expect(instancia instanceof RioDeJaneiroService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado RIO_GRANDE_DO_NORTE', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.RIO_GRANDE_DO_NORTE);
    expect(instancia instanceof RioGrandeDoNorteService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado RIO_GRANDE_DO_SUL', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.RIO_GRANDE_DO_SUL);
    expect(instancia instanceof RioGrandeDoSulService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado SANTA_CATARINA', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.SANTA_CATARINA);
    expect(instancia instanceof SantaCatarinaService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado SAO_PAULO', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.SAO_PAULO);
    expect(instancia instanceof SaoPauloService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado SERGIPE', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.SERGIPE);
    expect(instancia instanceof SergipeService).toBeTruthy();
  });

  it('deve ter uma instancia criada para o estado TOCANTINS', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.TOCANTINS);
    expect(instancia instanceof TocantinsService).toBeTruthy();
  });

  it('nao deve ter uma instancia criada para o estado que não existe', () => {
    const instancia = InscricaoEstadualFactory.criaInstancia('XX');
    expect(instancia).toBeFalsy();
  });

});
