import { TestBed, inject } from '@angular/core/testing';

import { ParaibaService } from './paraiba.service';

describe('Service: ParaibaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParaibaService]
    });
  });

  it('deve ter uma instancia criada', inject([ParaibaService], (service: ParaibaService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([ParaibaService], (service: ParaibaService) => {
    expect(service.validar('705905659')).toBe(true);
    expect(service.validar('554176190')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([ParaibaService], (service: ParaibaService) => {
    expect(service.validar('705905659')).toBe(true);
    expect(service.validar('70590565')).toBe(false);
    expect(service.validar('7059056591')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([ParaibaService], (service: ParaibaService) => {
    expect(service.validar('70590565-9')).toBe(true);
  }));
});
