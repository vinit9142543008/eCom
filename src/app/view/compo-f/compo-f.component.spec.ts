import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoFComponent } from './compo-f.component';

describe('CompoFComponent', () => {
  let component: CompoFComponent;
  let fixture: ComponentFixture<CompoFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompoFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
