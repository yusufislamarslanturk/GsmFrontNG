import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOptionsComponent } from './account-options.component';

describe('AccountOptionsComponent', () => {
  let component: AccountOptionsComponent;
  let fixture: ComponentFixture<AccountOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountOptionsComponent]
    });
    fixture = TestBed.createComponent(AccountOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
