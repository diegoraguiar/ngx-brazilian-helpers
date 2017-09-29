import { TestBed, inject } from '@angular/core/testing';

import { CearaService } from './ceara.service';

describe('Service: CearaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CearaService]
    });
  });

  it('deve ter uma instancia criada', inject([CearaService], (service: CearaService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([CearaService], (service: CearaService) => {
    expect(service.validar('060000015')).toBe(true);
    expect(service.validar('032972300')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([CearaService], (service: CearaService) => {
    expect(service.validar('060000015')).toBe(true);
    expect(service.validar('06000001')).toBe(false);
    expect(service.validar('0600000151')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([CearaService], (service: CearaService) => {
    expect(service.validar('06000001-5')).toBe(true);
  }));
});
