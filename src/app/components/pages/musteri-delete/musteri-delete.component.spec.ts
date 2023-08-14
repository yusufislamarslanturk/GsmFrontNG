import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriDeleteComponent } from './musteri-delete.component';

describe('MusteriDeleteComponent', () => {
  let component: MusteriDeleteComponent;
  let fixture: ComponentFixture<MusteriDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusteriDeleteComponent]
    });
    fixture = TestBed.createComponent(MusteriDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
