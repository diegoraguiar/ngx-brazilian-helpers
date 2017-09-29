import { TestBed, inject } from '@angular/core/testing';

import { ParaService } from './para.service';

describe('Service: ParaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParaService]
    });
  });

  it('deve ter uma instancia criada', inject([ParaService], (service: ParaService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([ParaService], (service: ParaService) => {
    expect(service.validar('157010864')).toBe(true);
    expect(service.validar('158596960')).toBe(true);
  }));

  it('deve ter 9 digitos', inject([ParaService], (service: ParaService) => {
    expect(service.validar('157010864')).toBe(true);
    expect(service.validar('15701086')).toBe(false);
    expect(service.validar('1570108641')).toBe(false);
  }));

  it('deve ter os 2 primeiros digitos igual a 15', inject([ParaService], (service: ParaService) => {
    expect(service.validar('157010864')).toBe(true);
    expect(service.validar('107010864')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([ParaService], (service: ParaService) => {
    expect(service.validar('15-701086-4')).toBe(true);
  }));
});
