import { TestBed, inject } from '@angular/core/testing';

import { AcreService } from './acre.service';

describe('Service: AcreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcreService]
    });
  });

  it('deve ter uma instancia criada', inject([AcreService], (service: AcreService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([AcreService], (service: AcreService) => {
    expect(service.validar('0153357306101')).toBe(true);
    expect(service.validar('0179590980409')).toBe(true);
    expect(service.validar('0102672366196')).toBe(true);
    expect(service.validar('0161517359950')).toBe(true);
    expect(service.validar('0184481000302')).toBe(true);
  }));

  it('deve ter 11 digitos', inject([AcreService], (service: AcreService) => {
    expect(service.validar('0153357306101')).toBe(true);
    expect(service.validar('015335730610')).toBe(false);
    expect(service.validar('01533573061012')).toBe(false);
  }));

  it('deve ter os 2 primeiros digitos igual a 01', inject([AcreService], (service: AcreService) => {
    expect(service.validar('0153357306101')).toBe(true);
    expect(service.validar('0053357306101')).toBe(false);
    expect(service.validar('1153357306101')).toBe(false);
    expect(service.validar('1053357306101')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([AcreService], (service: AcreService) => {
    expect(service.validar('01.533.573/061-01')).toBe(true);
  }));
});
