import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRouterComponent } from './nav-router.component';

describe('NavRouterComponent', () => {
  let component: NavRouterComponent;
  let fixture: ComponentFixture<NavRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
