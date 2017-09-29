import { TestBed, inject } from '@angular/core/testing';

import { GoiasService } from './goias.service';

describe('Service: GoiasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoiasService]
    });
  });

  it('deve ter uma instancia criada', inject([GoiasService], (service: GoiasService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([GoiasService], (service: GoiasService) => {
    expect(service.validar('159031770')).toBe(true);
    expect(service.validar('101031051')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([GoiasService], (service: GoiasService) => {
    expect(service.validar('159031770')).toBe(true);
    expect(service.validar('15903177')).toBe(false);
    expect(service.validar('1590317701')).toBe(false);
  }));

  it('quando a inscrição for 11094402 o digito pode ser 1 ou 0', inject([GoiasService], (service: GoiasService) => {
    expect(service.validar('110944020')).toBe(true);
    expect(service.validar('110944021')).toBe(true);
  }));

  it('deve começar com 10, 11 ou 15', inject([GoiasService], (service: GoiasService) => {
    expect(service.validar('100437745')).toBe(true);
    expect(service.validar('112283560')).toBe(true);
    expect(service.validar('159031770')).toBe(true);
    expect(service.validar('124414478')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([GoiasService], (service: GoiasService) => {
    expect(service.validar('15.903.177-0')).toBe(true);
    expect(service.validar('15.058.279-0')).toBe(true);
    expect(service.validar('10.614.918-0')).toBe(true);
  }));
});
