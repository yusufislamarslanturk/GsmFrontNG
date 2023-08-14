import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaOdemeComponent } from './fatura-odeme.component';

describe('FaturaOdemeComponent', () => {
  let component: FaturaOdemeComponent;
  let fixture: ComponentFixture<FaturaOdemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaturaOdemeComponent]
    });
    fixture = TestBed.createComponent(FaturaOdemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
