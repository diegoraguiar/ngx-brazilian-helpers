import { TestBed, inject } from '@angular/core/testing';

import { PernambucoService } from './pernambuco.service';

describe('Service: PernambucoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PernambucoService]
    });
  });

  it('deve ter uma instancia criada', inject([PernambucoService], (service: PernambucoService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([PernambucoService], (service: PernambucoService) => {
    expect(service.validar('512594198')).toBe(true);
    expect(service.validar('173062130')).toBe(true);
    expect(service.validar('032141840')).toBe(true);
  }));

  it('deve ter 9 digitos', inject([PernambucoService], (service: PernambucoService) => {
    expect(service.validar('512594198')).toBe(true);
    expect(service.validar('51259419')).toBe(false);
    expect(service.validar('5125941982')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([PernambucoService], (service: PernambucoService) => {
    expect(service.validar('5125941-98')).toBe(true);
  }));
});
