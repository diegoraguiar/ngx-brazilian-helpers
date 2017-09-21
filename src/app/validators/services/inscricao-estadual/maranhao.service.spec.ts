import { TestBed, inject } from '@angular/core/testing';

import { MaranhaoService } from './maranhao.service';

describe('Service: MaranhaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaranhaoService]
    });
  });

  it('deve ter uma instancia criada', inject([MaranhaoService], (service: MaranhaoService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([MaranhaoService], (service: MaranhaoService) => {
    expect(service.validar('124414478')).toBe(true);
    expect(service.validar('128543990')).toBe(true);
  }));

  it('deve começar com 12 que é o código do estado', inject([MaranhaoService], (service: MaranhaoService) => {
    expect(service.validar('124414478')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([MaranhaoService], (service: MaranhaoService) => {
    expect(service.validar('124414478')).toBe(true);
    expect(service.validar('12441447')).toBe(false);
    expect(service.validar('1244144781')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([MaranhaoService], (service: MaranhaoService) => {
    expect(service.validar('12441447-8')).toBe(true);
  }));
});
