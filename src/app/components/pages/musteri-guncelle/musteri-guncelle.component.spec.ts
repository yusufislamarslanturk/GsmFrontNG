import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriGuncelleComponent } from './musteri-guncelle.component';

describe('MusteriGuncelleComponent', () => {
  let component: MusteriGuncelleComponent;
  let fixture: ComponentFixture<MusteriGuncelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusteriGuncelleComponent]
    });
    fixture = TestBed.createComponent(MusteriGuncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
