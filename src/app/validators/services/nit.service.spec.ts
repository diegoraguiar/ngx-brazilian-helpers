import { TestBed, inject } from '@angular/core/testing';

import { NitService } from './nit.service';

describe('Service: NitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NitService]
    });
  });

  it('deve ter uma instancia criada', inject([NitService], (service: NitService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([NitService], (service: NitService) => {
    let isCnpjValido: boolean;

    isCnpjValido = service.validar('22430859792');
    expect(isCnpjValido).toBe(true);
  }));

  it('deve possuir 11 algarismos', inject([NitService], (service: NitService) => {
    let isCnpjValido: boolean;

    isCnpjValido = service.validar('22430859792');
    expect(isCnpjValido).toBe(true);

    isCnpjValido = service.validar('2243085979');
    expect(isCnpjValido).toBe(false);

    isCnpjValido = service.validar('224308597921');
    expect(isCnpjValido).toBe(false);
  }));

  it('deve possuir pelo menos 1 algarismo diferente', inject([NitService], (service: NitService) => {
    let isCnpjValido: boolean;

    isCnpjValido = service.validar('22430859792');
    expect(isCnpjValido).toBe(true);

    isCnpjValido = service.validar('11111111111');
    expect(isCnpjValido).toBe(false);
  }));

  it('deve estar valido quando estiver mascarado', inject([NitService], (service: NitService) => {
    let isCnpjValido: boolean;

    isCnpjValido = service.validar('136.04728.92-3');
    expect(isCnpjValido).toBe(true);
  }));

});
