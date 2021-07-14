import { TestBed } from '@angular/core/testing';

import { UiAbsoluteService } from './ui-absolute.service';

describe('UiAbsoluteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiAbsoluteService = TestBed.get(UiAbsoluteService);
    expect(service).toBeTruthy();
  });
});
