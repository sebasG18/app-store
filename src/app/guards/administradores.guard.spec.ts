import { TestBed } from '@angular/core/testing';

import { AdministradoresGuard } from './administradores.guard';

describe('AdministradoresGuard', () => {
  let guard: AdministradoresGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdministradoresGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
