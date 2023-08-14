import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahsilatDetailComponent } from './tahsilat-detail.component';

describe('TahsilatDetailComponent', () => {
  let component: TahsilatDetailComponent;
  let fixture: ComponentFixture<TahsilatDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TahsilatDetailComponent]
    });
    fixture = TestBed.createComponent(TahsilatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
