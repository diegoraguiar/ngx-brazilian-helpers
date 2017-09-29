import { TestBed, inject } from '@angular/core/testing';

import { BahiaService } from './bahia.service';

fdescribe('Service: BahiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BahiaService]
    });
  });

  it('deve ter uma instancia criada', inject([BahiaService], (service: BahiaService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([BahiaService], (service: BahiaService) => {
    expect(service.validar('05738971')).toBe(true);
    expect(service.validar('22080620')).toBe(true);
    expect(service.validar('90955050')).toBe(true);
    expect(service.validar('68458355')).toBe(true);
    expect(service.validar('100000306')).toBe(true);
  }));

  it('deve possuir 8 ou 9 digitos', inject([BahiaService], (service: BahiaService) => {
    expect(service.validar('05738971')).toBe(true);
    expect(service.validar('0573897')).toBe(false);
    expect(service.validar('100000306')).toBe(true);
    expect(service.validar('1000003061')).toBe(false);
  }));

  it('deve estar valido mesmo quando estiver mascarado', inject([BahiaService], (service: BahiaService) => {
    expect(service.validar('057389-71')).toBe(true);
    expect(service.validar('1000003-06')).toBe(true);
  }));

});
