import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoHconComponent } from './compo-hcon.component';

describe('CompoHconComponent', () => {
  let component: CompoHconComponent;
  let fixture: ComponentFixture<CompoHconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompoHconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoHconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
