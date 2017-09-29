import { TestBed, inject } from '@angular/core/testing';

import { MinasGeraisService } from './minas-gerais.service';

fdescribe('Service: MinasGeraisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinasGeraisService]
    });
  });

  it('deve ter uma instancia criada', inject([MinasGeraisService], (service: MinasGeraisService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([MinasGeraisService], (service: MinasGeraisService) => {
    expect(service.validar('8847098802240')).toBe(true);
  }));

  it('deve possuir 13 digitos', inject([MinasGeraisService], (service: MinasGeraisService) => {
    expect(service.validar('8847098802240')).toBe(true);
    expect(service.validar('884709880224')).toBe(false);
    expect(service.validar('88470988022401')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([MinasGeraisService], (service: MinasGeraisService) => {
    expect(service.validar('884.709.880/2240')).toBe(true);
    expect(service.validar('062.307.904/0081')).toBe(true);
  }));
});
