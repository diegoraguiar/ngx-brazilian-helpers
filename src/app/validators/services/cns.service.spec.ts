import { TestBed, inject } from '@angular/core/testing';

import { CnsService } from './cns.service';

describe('Service: CnsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnsService]
    });
  });

  it('deve ter uma instancia criada', inject([CnsService], (service: CnsService) => {
    expect(service).toBeTruthy();
  }));

  it('deve estar valido', inject([CnsService], (service: CnsService) => {
    expect(service.validar('208495741540001')).toBe(true);
    expect(service.validar('196975843190008')).toBe(true);
    expect(service.validar('161479545530000')).toBe(true);
    expect(service.validar('190186999420018')).toBe(true);
  }));

  it('deve possuir 15 algarismos', inject([CnsService], (service: CnsService) => {
    expect(service.validar('208495741540001')).toBe(true);
    expect(service.validar('20849574154000')).toBe(false);
    expect(service.validar('2084957415400012')).toBe(false);
  }));

  it('deve comecar com 1, 2, 7, 8, 9', inject([CnsService], (service: CnsService) => {
    expect(service.validar('745213839980006')).toBe(true);
    expect(service.validar('903768036770003')).toBe(true);
    expect(service.validar('003768036770003')).toBe(false);
  }));

  it('deve validar cns provisorios', inject([CnsService], (service: CnsService) => {
    expect(service.validar('745213839980006')).toBe(true);
    expect(service.validar('903768036770003')).toBe(true);
  }));
});
