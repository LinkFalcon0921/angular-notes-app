import { TestBed } from '@angular/core/testing';

import { LocalIconService } from './local-icon.service';

describe('LocalIconService', () => {
  let service: LocalIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
