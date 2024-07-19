import { TestBed } from '@angular/core/testing';
import { FieldWorkerService } from './fieldworker.service';
// import { FieldworkerService } from './fieldworker.service';

describe('FieldworkerService', () => {
  let service: FieldWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
