import { TestBed, inject } from '@angular/core/testing';

import { TitutoEleitorService } from './tituto-eleitor.service';

fdescribe('TitutoEleitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitutoEleitorService]
    });
  });

  it('deve ter uma instancia criada', inject([TitutoEleitorService], (service: TitutoEleitorService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([TitutoEleitorService], (service: TitutoEleitorService) => {
    expect(service.validar('386665680108')).toBe(true);
    expect(service.validar('866127132054')).toBe(true);
    expect(service.validar('128582421317')).toBe(true);
    expect(service.validar('130520332305')).toBe(true);
    expect(service.validar('537546852151')).toBe(true);
  }));

  it('deve possuir 12 algarismos', inject([TitutoEleitorService], (service: TitutoEleitorService) => {
    let isTituloEleitorValido: boolean;

    isTituloEleitorValido = service.validar('386665680108');
    expect(isTituloEleitorValido).toBe(true);

    isTituloEleitorValido = service.validar('38666568010');
    expect(isTituloEleitorValido).toBe(false);

    isTituloEleitorValido = service.validar('3866656801081');
    expect(isTituloEleitorValido).toBe(false);
  }));

  it('deve possuir pelo menos 1 algarismo diferente', inject([TitutoEleitorService], (service: TitutoEleitorService) => {
    let isNitValido: boolean;

    isNitValido = service.validar('386665680108');
    expect(isNitValido).toBe(true);

    isNitValido = service.validar('11111111111');
    expect(isNitValido).toBe(false);
  }));

  it('deve estar valido quando estiver mascarado', inject([TitutoEleitorService], (service: TitutoEleitorService) => {
    let isCpfValido: boolean;

    isCpfValido = service.validar('3866.6568.0108');
    expect(isCpfValido).toBe(true);
  }));

});
