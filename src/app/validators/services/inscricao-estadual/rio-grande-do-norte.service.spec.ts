import { TestBed, inject } from '@angular/core/testing';

import { RioGrandeDoNorteService } from './rio-grande-do-norte.service';

describe('Service: RioGrandeDoNorteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RioGrandeDoNorteService]
    });
  });

  it('deve ter uma instancia criada', inject([RioGrandeDoNorteService], (service: RioGrandeDoNorteService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([RioGrandeDoNorteService], (service: RioGrandeDoNorteService) => {
    expect(service.validar('204696666')).toBe(true);
    expect(service.validar('200400401')).toBe(true);

  }));

  it('deve ter os 2 primeiros digitos igual a 20', inject([RioGrandeDoNorteService], (service: RioGrandeDoNorteService) => {
    expect(service.validar('204696666')).toBe(true);
    expect(service.validar('004696666')).toBe(false);
    expect(service.validar('024696666')).toBe(false);
    expect(service.validar('224696666')).toBe(false);
  }));

  it('deve possuir 9 digitos', inject([RioGrandeDoNorteService], (service: RioGrandeDoNorteService) => {
    expect(service.validar('204696666')).toBe(true);
  }));

  it('deve possuir 10 digitos', inject([RioGrandeDoNorteService], (service: RioGrandeDoNorteService) => {
    expect(service.validar('2000400400')).toBe(true);
  }));

  it('deve estar valido mesmo com mascara', inject([RioGrandeDoNorteService], (service: RioGrandeDoNorteService) => {
    expect(service.validar('20.469.666-6')).toBe(true);
  }));
});
