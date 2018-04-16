import { TestBed, inject } from '@angular/core/testing';

import { MediaLibraryService } from './media-library.service';

describe('MediaLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaLibraryService]
    });
  });

  it('should be created', inject([MediaLibraryService], (service: MediaLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
