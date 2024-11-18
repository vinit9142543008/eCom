import { TestBed } from '@angular/core/testing';

import { ItemMangService } from './item-mang.service';

describe('ItemMangService', () => {
  let service: ItemMangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemMangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
