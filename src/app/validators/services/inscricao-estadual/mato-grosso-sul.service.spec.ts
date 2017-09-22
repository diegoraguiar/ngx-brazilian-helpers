import { TestBed, inject } from '@angular/core/testing';

import { MatoGrossoSulService } from './mato-grosso-sul.service';

describe('Service: MatoGrossoSulService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatoGrossoSulService]
    });
  });

  it('deve ter uma instancia criada', inject([MatoGrossoSulService], (service: MatoGrossoSulService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([MatoGrossoSulService], (service: MatoGrossoSulService) => {
    expect(service.validar('288786092')).toBe(true);
    expect(service.validar('286330040')).toBe(true);
    expect(service.validar('281867780')).toBe(true);
  }));

  it('deve ter 9 digitos', inject([MatoGrossoSulService], (service: MatoGrossoSulService) => {
    expect(service.validar('288786092')).toBe(true);
    expect(service.validar('28878609')).toBe(false);
    expect(service.validar('2887860921')).toBe(false);
  }));

  it('deve ter os 2 primeiros digitos igual a 28', inject([MatoGrossoSulService], (service: MatoGrossoSulService) => {
    expect(service.validar('288786092')).toBe(true);
    expect(service.validar('107010864')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([MatoGrossoSulService], (service: MatoGrossoSulService) => {
    expect(service.validar('288786092')).toBe(true);
  }));
});
