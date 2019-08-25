import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectButtonInputComponent } from './select-button-input.component';

describe('SelectButtonInputComponent', () => {
  let component: SelectButtonInputComponent;
  let fixture: ComponentFixture<SelectButtonInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectButtonInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectButtonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
