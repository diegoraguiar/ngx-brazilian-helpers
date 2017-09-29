import { TestBed, inject } from '@angular/core/testing';

import { SaoPauloService } from './sao-paulo.service';

describe('Service: SaoPauloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaoPauloService]
    });
  });

  it('deve ter uma instancia criada', inject([SaoPauloService], (service: SaoPauloService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([SaoPauloService], (service: SaoPauloService) => {
    expect(service.validar('110042490114')).toBe(true);
    expect(service.validar('177601792451')).toBe(true);
    expect(service.validar('P011004243002')).toBe(true);
  }));

  it('deve possuir 12 ou 13 digitos', inject([SaoPauloService], (service: SaoPauloService) => {
    expect(service.validar('110042490114')).toBe(true);
    expect(service.validar('P011004243002')).toBe(true);
    expect(service.validar('11004249011')).toBe(false);
    expect(service.validar('11004249011411')).toBe(false);
  }));

  it('quando possuir 13 digitos deve começar com a letra P', inject([SaoPauloService], (service: SaoPauloService) => {
    expect(service.validar('P011004243002')).toBe(true);
    expect(service.validar('D011004243002')).toBe(false);
    expect(service.validar('1100424901142')).toBe(false);
  }));

  it('deve estar valido mesmo quando estiver mascarado', inject([SaoPauloService], (service: SaoPauloService) => {
    expect(service.validar('110.042.490.114')).toBe(true);
    expect(service.validar('P-01100424.3/002')).toBe(true);
  }));

});
