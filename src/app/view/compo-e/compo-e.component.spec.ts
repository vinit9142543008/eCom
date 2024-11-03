import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoEComponent } from './compo-e.component';

describe('CompoEComponent', () => {
  let component: CompoEComponent;
  let fixture: ComponentFixture<CompoEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompoEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
