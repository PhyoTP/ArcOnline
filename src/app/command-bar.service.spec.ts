import { TestBed } from '@angular/core/testing';

import { CommandBarService } from './command-bar.service';

describe('CommandBarService', () => {
  let service: CommandBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
