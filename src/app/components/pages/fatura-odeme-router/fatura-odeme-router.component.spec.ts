import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaOdemeRouterComponent } from './fatura-odeme-router.component';

describe('FaturaOdemeRouterComponent', () => {
  let component: FaturaOdemeRouterComponent;
  let fixture: ComponentFixture<FaturaOdemeRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaturaOdemeRouterComponent]
    });
    fixture = TestBed.createComponent(FaturaOdemeRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
