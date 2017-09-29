import { TestBed, inject } from '@angular/core/testing';

import { RoraimaService } from './roraima.service';

describe('Service: RoraimaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoraimaService]
    });
  });

  it('deve ter uma instancia criada', inject([RoraimaService], (service: RoraimaService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([RoraimaService], (service: RoraimaService) => {
    expect(service.validar('242431347')).toBe(true);
    expect(service.validar('249831205')).toBe(true);
  }));

  it('deve começar com 24 que é o código do estado', inject([RoraimaService], (service: RoraimaService) => {
    expect(service.validar('242431347')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([RoraimaService], (service: RoraimaService) => {
    expect(service.validar('242431347')).toBe(true);
    expect(service.validar('24243134')).toBe(false);
    expect(service.validar('2424313471')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([RoraimaService], (service: RoraimaService) => {
    expect(service.validar('24243134-7')).toBe(true);
  }));
});
