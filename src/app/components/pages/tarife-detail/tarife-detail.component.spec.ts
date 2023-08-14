import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifeDetailComponent } from './tarife-detail.component';

describe('TarifeDetailComponent', () => {
  let component: TarifeDetailComponent;
  let fixture: ComponentFixture<TarifeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarifeDetailComponent]
    });
    fixture = TestBed.createComponent(TarifeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
