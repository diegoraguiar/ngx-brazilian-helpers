import { TestBed, inject } from '@angular/core/testing';

import { AlagoasService } from './alagoas.service';

describe('Service: AlagoasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlagoasService]
    });
  });

  it('deve ter uma instancia criada', inject([AlagoasService], (service: AlagoasService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([AlagoasService], (service: AlagoasService) => {
    expect(service.validar('240000048')).toBe(true);
    expect(service.validar('245458930')).toBe(true);
  }));

  it('deve começar com 24 que é o código do estado', inject([AlagoasService], (service: AlagoasService) => {
    expect(service.validar('240000048')).toBe(true);
  }));

  it('deve possuir o codigo da empresa igual a 0, ou 3, ou 5, ou 7, ou 8', inject([AlagoasService], (service: AlagoasService) => {
    expect(service.validar('240000048')).toBe(true);
    expect(service.validar('243103905')).toBe(true);
    expect(service.validar('245211306')).toBe(true);
    expect(service.validar('247961361')).toBe(true);
    expect(service.validar('248575465')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([AlagoasService], (service: AlagoasService) => {
    expect(service.validar('240000048')).toBe(true);
    expect(service.validar('24877298')).toBe(false);
    expect(service.validar('2487729885')).toBe(false);
  }));
});
