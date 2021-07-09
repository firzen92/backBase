import { TestBed } from '@angular/core/testing';

import { BbUiService } from './bb-ui.service';

describe('BbUiService', () => {
  let service: BbUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
