import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoGComponent } from './compo-g.component';

describe('CompoGComponent', () => {
  let component: CompoGComponent;
  let fixture: ComponentFixture<CompoGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompoGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
