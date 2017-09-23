import { TestBed, inject } from '@angular/core/testing';

import { RioDeJaneiroService } from './rio-de-janeiro.service';

describe('Service: RioDeJaneiroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RioDeJaneiroService]
    });
  });

  it('deve ter uma instancia criada', inject([RioDeJaneiroService], (service: RioDeJaneiroService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([RioDeJaneiroService], (service: RioDeJaneiroService) => {
    expect(service.validar('74272681')).toBe(true);
    expect(service.validar('91993970')).toBe(true);
  }));

  it('deve possuir 8 digitos', inject([RioDeJaneiroService], (service: RioDeJaneiroService) => {
    expect(service.validar('74272681')).toBe(true);
    expect(service.validar('7427268')).toBe(false);
    expect(service.validar('742726811')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([RioDeJaneiroService], (service: RioDeJaneiroService) => {
    expect(service.validar('74.272.68-1')).toBe(true);
  }));
});
