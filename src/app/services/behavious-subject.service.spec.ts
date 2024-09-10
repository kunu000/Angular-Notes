import { TestBed } from '@angular/core/testing';

import { BehaviousSubjectService } from './behavious-subject.service';

describe('BehaviousSubjectService', () => {
  let service: BehaviousSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviousSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
