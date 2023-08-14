import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturaKesComponent } from './fatura-kes.component';

describe('FaturaKesComponent', () => {
  let component: FaturaKesComponent;
  let fixture: ComponentFixture<FaturaKesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaturaKesComponent]
    });
    fixture = TestBed.createComponent(FaturaKesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
