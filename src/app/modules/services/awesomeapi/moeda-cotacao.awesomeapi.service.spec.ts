import { TestBed } from '@angular/core/testing';

import { MoedaCotacaoService } from './moeda-cotacao.awesomeapi.service';

describe('MoedaCotacaoService', () => {
  let service: MoedaCotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoedaCotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
