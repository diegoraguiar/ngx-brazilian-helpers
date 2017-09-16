import { TestBed, inject } from '@angular/core/testing';

import { RenavamService } from './renavam.service';

describe('Service: RenavamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RenavamService]
    });
  });

  it('deve ter uma instancia criada', inject([RenavamService], (service: RenavamService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([RenavamService], (service: RenavamService) => {
    let isRenavamValido: boolean;

    isRenavamValido = service.validar('32640834831');
    expect(isRenavamValido).toBe(true);

    isRenavamValido = service.validar('639884962');
    expect(isRenavamValido).toBe(true);
  }));

  it('deve possuir 11 algarismos - padrão novo', inject([RenavamService], (service: RenavamService) => {
    let isRenavamValido: boolean;

    isRenavamValido = service.validar('32640834831');
    expect(isRenavamValido).toBe(true);

    isRenavamValido = service.validar('3264083483');
    expect(isRenavamValido).toBe(false);

    isRenavamValido = service.validar('326408348312');
    expect(isRenavamValido).toBe(false);
  }));

  it('deve possuir 9 algarismos - padrão antigo', inject([RenavamService], (service: RenavamService) => {
    let isRenavamValido: boolean;

    isRenavamValido = service.validar('639884962');
    expect(isRenavamValido).toBe(true);

    isRenavamValido = service.validar('62345678');
    expect(isRenavamValido).toBe(false);

    isRenavamValido = service.validar('6234567891');
    expect(isRenavamValido).toBe(false);
  }));

  it('deve possuir pelo menos 1 algarismo diferente', inject([RenavamService], (service: RenavamService) => {
    let isNitValido: boolean;

    isNitValido = service.validar('32640834831');
    expect(isNitValido).toBe(true);

    isNitValido = service.validar('11111111111');
    expect(isNitValido).toBe(false);
  }));

});
