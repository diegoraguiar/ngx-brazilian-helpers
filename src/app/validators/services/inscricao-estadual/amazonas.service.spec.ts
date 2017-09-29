import { TestBed, inject } from '@angular/core/testing';

import { AmazonasService } from './amazonas.service';

describe('Service: AmazonasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmazonasService]
    });
  });

  it('deve ter uma instancia criada', inject([AmazonasService], (service: AmazonasService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([AmazonasService], (service: AmazonasService) => {
    expect(service.validar('588718017')).toBe(true);
    expect(service.validar('058075160')).toBe(true);
    expect(service.validar('100000002')).toBe(true);
  }));

  it('deve possuir 9 digitos', inject([AmazonasService], (service: AmazonasService) => {
    expect(service.validar('588718017')).toBe(true);
    expect(service.validar('58871801')).toBe(false);
    expect(service.validar('5887180171')).toBe(false);
  }));

  it('deve estar valido mesmo com mascara', inject([AmazonasService], (service: AmazonasService) => {
    expect(service.validar('58.871.801-7')).toBe(true);
  }));
});
