import { TestBed, inject } from '@angular/core/testing';

import { PiauiService } from './piaui.service';

describe('Service: PiauiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PiauiService]
    });
  });

  it('deve ter uma instancia criada', inject([PiauiService], (service: PiauiService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([PiauiService], (service: PiauiService) => {
    expect(service.validar('250821753')).toBe(true);
    expect(service.validar('894158210')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([PiauiService], (service: PiauiService) => {
    expect(service.validar('250821753')).toBe(true);
    expect(service.validar('25082173')).toBe(false);
    expect(service.validar('2508217531')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([PiauiService], (service: PiauiService) => {
    expect(service.validar('25082175-3')).toBe(true);
  }));
});
