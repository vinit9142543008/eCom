import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoDComponent } from './compo-d.component';

describe('CompoDComponent', () => {
  let component: CompoDComponent;
  let fixture: ComponentFixture<CompoDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompoDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
