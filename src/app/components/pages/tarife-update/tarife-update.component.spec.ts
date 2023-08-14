import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifeUpdateComponent } from './tarife-update.component';

describe('TarifeUpdateComponent', () => {
  let component: TarifeUpdateComponent;
  let fixture: ComponentFixture<TarifeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarifeUpdateComponent]
    });
    fixture = TestBed.createComponent(TarifeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
