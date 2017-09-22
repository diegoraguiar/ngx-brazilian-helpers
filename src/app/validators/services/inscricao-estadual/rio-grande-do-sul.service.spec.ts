import { TestBed, inject } from '@angular/core/testing';

import { RioGrandeDoSulService } from './rio-grande-do-sul.service';

describe('Service: RioGrandeDoSulService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RioGrandeDoSulService]
    });
  });

  it('deve ter uma instancia criada', inject([RioGrandeDoSulService], (service: RioGrandeDoSulService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([RioGrandeDoSulService], (service: RioGrandeDoSulService) => {
    expect(service.validar('5198455519')).toBe(true);
    expect(service.validar('2198088180')).toBe(true);
  }));

  it('deve possuir 10 digitos', inject([RioGrandeDoSulService], (service: RioGrandeDoSulService) => {
    expect(service.validar('5198455519')).toBe(true);
    expect(service.validar('519845551')).toBe(false);
    expect(service.validar('51984555191')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([RioGrandeDoSulService], (service: RioGrandeDoSulService) => {
    expect(service.validar('519/8455519')).toBe(true);
  }));
});
