import { TestBed } from '@angular/core/testing';

import { NgxLibraryCommonService } from './ngx-library-common.service';

describe('NgxLibraryCommonService', () => {
  let service: NgxLibraryCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLibraryCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
