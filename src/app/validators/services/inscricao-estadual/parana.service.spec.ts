import { TestBed, inject } from '@angular/core/testing';

import { ParanaService } from './parana.service';

describe('Service: ParanaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParanaService]
    });
  });

  it('deve ter uma instancia criada', inject([ParanaService], (service: ParanaService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([ParanaService], (service: ParanaService) => {
    expect(service.validar('9998700237')).toBe(true);
    expect(service.validar('9240366050')).toBe(true);
  }));

  it('deve ter 10 digitos', inject([ParanaService], (service: ParanaService) => {
    expect(service.validar('9998700237')).toBe(true);
    expect(service.validar('999870023')).toBe(false);
    expect(service.validar('99987002372')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([ParanaService], (service: ParanaService) => {
    expect(service.validar('999.87002-37')).toBe(true);
  }));
});
