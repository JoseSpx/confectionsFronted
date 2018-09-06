import { TestBed, inject } from '@angular/core/testing';

import { TypeMeasureService } from './type-measure.service';

describe('TypeMeasureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeMeasureService]
    });
  });

  it('should be created', inject([TypeMeasureService], (service: TypeMeasureService) => {
    expect(service).toBeTruthy();
  }));
});
