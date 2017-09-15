import { TestBed, inject } from '@angular/core/testing';

import { CnpjService } from './cnpj.service';

describe('Service: CnpjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnpjService]
    });
  });

  it('deve ter uma instancia criada', inject([CnpjService], (service: CnpjService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([CnpjService], (service: CnpjService) => {
    let isCnpjValido: boolean;

    isCnpjValido = service.validar('23578543000196');
    expect(isCnpjValido).toBe(true);
  }));

  it('deve possuir 14 algarismos', inject([CnpjService], (service: CnpjService) => {
    let isCnpjValido: boolean;

    isCnpjValido = service.validar('23578543000196');
    expect(isCnpjValido).toBe(true);

    isCnpjValido = service.validar('2357854300019');
    expect(isCnpjValido).toBe(false);

    isCnpjValido = service.validar('235785430001961');
    expect(isCnpjValido).toBe(false);
  }));

  it('deve possuir pelo menos 1 algarismo diferente', inject([CnpjService], (service: CnpjService) => {
    let isCnpjValido: boolean;

    isCnpjValido = service.validar('23578543000196');
    expect(isCnpjValido).toBe(true);

    isCnpjValido = service.validar('11111111111111');
    expect(isCnpjValido).toBe(false);
  }));

  it('deve estar valido quando estiver mascarado', inject([CnpjService], (service: CnpjService) => {
    let isCnpjValido: boolean;

    isCnpjValido = service.validar('23.578.543/0001-96');
    expect(isCnpjValido).toBe(true);
  }));
});
