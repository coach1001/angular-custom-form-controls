import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeInput } from './date-time-input.component';

describe('EmailAddressInputComponent', () => {
  let component: DateTimeInput;
  let fixture: ComponentFixture<DateTimeInput>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimeInput ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
