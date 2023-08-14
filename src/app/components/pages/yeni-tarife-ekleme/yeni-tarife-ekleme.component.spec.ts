import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniTarifeEklemeComponent } from './yeni-tarife-ekleme.component';

describe('YeniTarifeEklemeComponent', () => {
  let component: YeniTarifeEklemeComponent;
  let fixture: ComponentFixture<YeniTarifeEklemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YeniTarifeEklemeComponent]
    });
    fixture = TestBed.createComponent(YeniTarifeEklemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
