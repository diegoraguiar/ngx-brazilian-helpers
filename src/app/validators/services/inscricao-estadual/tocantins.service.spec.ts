import { TestBed, inject } from '@angular/core/testing';

import { TocantinsService } from './tocantins.service';

describe('Service: TocantinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TocantinsService]
    });
  });

  it('deve ter uma instancia criada', inject([TocantinsService], (service: TocantinsService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([TocantinsService], (service: TocantinsService) => {
    expect(service.validar('29010227836')).toBe(true);
    expect(service.validar('95036526780')).toBe(true);
  }));

  it('deve possuir o codigo da empresa igual a 01, ou 02, ou 03, ou 99', inject([TocantinsService], (service: TocantinsService) => {
    expect(service.validar('29010227836')).toBe(true);
    expect(service.validar('35037221621')).toBe(true);
    expect(service.validar('35027221621')).toBe(true);
    expect(service.validar('35997221621')).toBe(true);
    expect(service.validar('35007221621')).toBe(false);
  }));

  it('deve possuir 11 digitos', inject([TocantinsService], (service: TocantinsService) => {
    expect(service.validar('35037221621')).toBe(true);
    expect(service.validar('3503722162')).toBe(false);
    expect(service.validar('350372216211')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([TocantinsService], (service: TocantinsService) => {
    expect(service.validar('3503722162-1')).toBe(true);
  }));

});
