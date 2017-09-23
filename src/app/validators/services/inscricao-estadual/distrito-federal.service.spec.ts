import { TestBed, inject } from '@angular/core/testing';

import { DistritoFederalService } from './distrito-federal.service';

describe('Service: DistritoFederalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistritoFederalService]
    });
  });

  it('deve ter uma instancia criada', inject([DistritoFederalService], (service: DistritoFederalService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([DistritoFederalService], (service: DistritoFederalService) => {
    expect(service.validar('0764169000118')).toBe(true);
    expect(service.validar('0728849100130')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([DistritoFederalService], (service: DistritoFederalService) => {
    expect(service.validar('0764169000118')).toBe(true);
    expect(service.validar('076416900011')).toBe(false);
    expect(service.validar('07641690001181')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([DistritoFederalService], (service: DistritoFederalService) => {
    expect(service.validar('07641690001-18')).toBe(true);
  }));
});
