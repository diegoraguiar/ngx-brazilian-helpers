import { TestBed, inject } from '@angular/core/testing';

import { AmapaService } from './amapa.service';

describe('Service: AmapaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmapaService]
    });
  });

  it('deve ter uma instancia criada', inject([AmapaService], (service: AmapaService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([AmapaService], (service: AmapaService) => {
    expect(service.validar('039196356')).toBe(true);
    expect(service.validar('038007835')).toBe(true);
    expect(service.validar('039732606')).toBe(true);
    expect(service.validar('030701490')).toBe(true);
    expect(service.validar('033028940')).toBe(true);
    expect(service.validar('033767890')).toBe(true);
    expect(service.validar('038172810')).toBe(true);
  }));

  it('deve começar com 03 que é o código do estado', inject([AmapaService], (service: AmapaService) => {
    expect(service.validar('033516294')).toBe(true);
  }));

  it('deve ter peso 5 e digito 0 quando for de 03000001 a 03017000', inject([AmapaService], (service: AmapaService) => {
    expect(service.validar('030123459')).toBe(true);
  }));

  it('deve ter peso 9 e digito 1 quando for de 03017001 a 03019022', inject([AmapaService], (service: AmapaService) => {
    expect(service.validar('030170011')).toBe(true);
  }));

  it('deve ter peso 0 e digito 0 quando for acima de 033335532', inject([AmapaService], (service: AmapaService) => {
    expect(service.validar('030170011')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([AmapaService], (service: AmapaService) => {
    expect(service.validar('033516294')).toBe(true);
    expect(service.validar('03351629')).toBe(false);
    expect(service.validar('0335162941')).toBe(false);
  }));
});
