import { TestBed, inject } from '@angular/core/testing';

import { MatoGrossoService } from './mato-grosso.service';

describe('Service: MatoGrossoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatoGrossoService]
    });
  });

  it('deve ter uma instancia criada', inject([MatoGrossoService], (service: MatoGrossoService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([MatoGrossoService], (service: MatoGrossoService) => {
    expect(service.validar('87979654101')).toBe(true);
    expect(service.validar('88454923760')).toBe(true);
  }));

  it('deve possuir 11 digitos', inject([MatoGrossoService], (service: MatoGrossoService) => {
    expect(service.validar('87979654101')).toBe(true);
    expect(service.validar('879796541')).toBe(false);
    expect(service.validar('879796541011')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([MatoGrossoService], (service: MatoGrossoService) => {
    expect(service.validar('8797965410-1')).toBe(true);
  }));
});
