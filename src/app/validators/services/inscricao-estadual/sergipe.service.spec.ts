import { TestBed, inject } from '@angular/core/testing';

import { SergipeService } from './sergipe.service';

describe('Service: SergipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SergipeService]
    });
  });

  it('deve ter uma instancia criada', inject([SergipeService], (service: SergipeService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([SergipeService], (service: SergipeService) => {
    expect(service.validar('130995606')).toBe(true);
    expect(service.validar('489508510')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([SergipeService], (service: SergipeService) => {
    expect(service.validar('130995606')).toBe(true);
    expect(service.validar('13099560')).toBe(false);
    expect(service.validar('1309956061')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([SergipeService], (service: SergipeService) => {
    expect(service.validar('13099560-6')).toBe(true);
  }));
});
