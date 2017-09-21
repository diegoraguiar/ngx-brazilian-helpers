import { TestBed, inject } from '@angular/core/testing';

import { EspiritoSantoService } from './espirito-santo.service';

describe('Service: EspiritoSantoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspiritoSantoService]
    });
  });

  it('deve ter uma instancia criada', inject([EspiritoSantoService], (service: EspiritoSantoService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([EspiritoSantoService], (service: EspiritoSantoService) => {
    expect(service.validar('078246059')).toBe(true);
    expect(service.validar('560510870')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([EspiritoSantoService], (service: EspiritoSantoService) => {
    expect(service.validar('078246059')).toBe(true);
    expect(service.validar('07824605')).toBe(false);
    expect(service.validar('0782460591')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([EspiritoSantoService], (service: EspiritoSantoService) => {
    expect(service.validar('07824605-9')).toBe(true);
  }));
});
