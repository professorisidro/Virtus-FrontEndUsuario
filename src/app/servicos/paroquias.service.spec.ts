import { TestBed } from '@angular/core/testing';

import { ParoquiasService } from './paroquias.service';

describe('ParoquiasService', () => {
  let service: ParoquiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParoquiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
