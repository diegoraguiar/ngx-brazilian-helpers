import { TestBed, inject } from '@angular/core/testing';

import { CpfService } from './cpf.service';

describe('Service: CPFService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CpfService]
    });
  });

  it('deve ter uma instancia criada', inject([CpfService], (service: CpfService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([CpfService], (service: CpfService) => {
    let isCpfValido: boolean;

    isCpfValido = service.validar('72525457501');
    expect(isCpfValido).toBe(true);

    isCpfValido = service.validar('55266055901');
    expect(isCpfValido).toBe(true);
  }));

  it('deve possuir 11 algarismos', inject([CpfService], (service: CpfService) => {
    let isCpfValido: boolean;

    isCpfValido = service.validar('72525457501');
    expect(isCpfValido).toBe(true);

    isCpfValido = service.validar('1111111111');
    expect(isCpfValido).toBe(false);

    isCpfValido = service.validar('111111111111');
    expect(isCpfValido).toBe(false);
  }));

  it('deve possuir pelo menos 1 algarismo diferente', inject([CpfService], (service: CpfService) => {
    let isCpfValido: boolean;

    isCpfValido = service.validar('72525457501');
    expect(isCpfValido).toBe(true);

    isCpfValido = service.validar('11111111111');
    expect(isCpfValido).toBe(false);
  }));

  it('deve estar com o primeiro digito verificador valido', inject([CpfService], (service: CpfService) => {
    let isCpfValido: boolean;

    isCpfValido = service.validar('72525457501');
    expect(isCpfValido).toBe(true);

    isCpfValido = service.validar('72525457511');
    expect(isCpfValido).toBe(false);
  }));

  it('deve estar com o segundo digito verificador valido', inject([CpfService], (service: CpfService) => {
    let isCpfValido: boolean;

    isCpfValido = service.validar('72525457501');
    expect(isCpfValido).toBe(true);

    isCpfValido = service.validar('72525457511');
    expect(isCpfValido).toBe(false);
  }));

  it('deve estar valido quando estiver mascarado', inject([CpfService], (service: CpfService) => {
    let isCpfValido: boolean;

    isCpfValido = service.validar('725.254.575-01');
    expect(isCpfValido).toBe(true);
  }));

});
