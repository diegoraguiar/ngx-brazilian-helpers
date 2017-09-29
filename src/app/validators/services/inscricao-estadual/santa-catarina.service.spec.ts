import { TestBed, inject } from '@angular/core/testing';

import { SantaCatarinaService } from './santa-catarina.service';

describe('Service: SantaCatarinaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SantaCatarinaService]
    });
  });

  it('deve ter uma instancia criada', inject([SantaCatarinaService], (service: SantaCatarinaService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([SantaCatarinaService], (service: SantaCatarinaService) => {
    expect(service.validar('193946912')).toBe(true);
    expect(service.validar('105649600')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([SantaCatarinaService], (service: SantaCatarinaService) => {
    expect(service.validar('193946912')).toBe(true);
    expect(service.validar('19394691')).toBe(false);
    expect(service.validar('1939469121')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([SantaCatarinaService], (service: SantaCatarinaService) => {
    expect(service.validar('193.946.912')).toBe(true);
  }));
});
