import { TestBed, inject } from '@angular/core/testing';

import { RondoniaService } from './rondonia.service';

describe('Service: RondoniaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RondoniaService]
    });
  });

  it('deve ter uma instancia criada', inject([RondoniaService], (service: RondoniaService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([RondoniaService], (service: RondoniaService) => {
    expect(service.validar('53433640203281')).toBe(true);
    expect(service.validar('00000000625213')).toBe(true);
  }));

  it('deve possuir 14 digitos', inject([RondoniaService], (service: RondoniaService) => {
    expect(service.validar('53433640203281')).toBe(true);
    expect(service.validar('5343364020328')).toBe(false);
    expect(service.validar('534336402032811')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([RondoniaService], (service: RondoniaService) => {
    expect(service.validar('5343364020328-1')).toBe(true);
    expect(service.validar('0799948333566-0')).toBe(true);
  }));
});
