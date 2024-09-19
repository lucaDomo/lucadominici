import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { projectNameGuard } from './project-name.guard';

describe('projectNameGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => projectNameGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
