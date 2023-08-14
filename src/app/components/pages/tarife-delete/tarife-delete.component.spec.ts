import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifeDeleteComponent } from './tarife-delete.component';

describe('TarifeDeleteComponent', () => {
  let component: TarifeDeleteComponent;
  let fixture: ComponentFixture<TarifeDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarifeDeleteComponent]
    });
    fixture = TestBed.createComponent(TarifeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
