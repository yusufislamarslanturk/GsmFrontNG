import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriDetailComponent } from './musteri-detail.component';

describe('MusteriDetailComponent', () => {
  let component: MusteriDetailComponent;
  let fixture: ComponentFixture<MusteriDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusteriDetailComponent]
    });
    fixture = TestBed.createComponent(MusteriDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
