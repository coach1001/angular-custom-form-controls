import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'date-time-input',
  templateUrl: './date-time-input.component.html',
  styleUrls: ['./date-time-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimeInput),
      multi: true
    }
  ]
})
export class DateTimeInput
  implements ControlValueAccessor, OnInit {
  
  public date: Date;
  public hours: number;
  public minutes: number;
  
  public _value: Date;

  hoursLookup: number[] = [];
  minutesLookup: number[] = [];

  @Input()
  disabled = false;

  constructor() {}

  ngOnInit() {
    for (let i = 0; i <= 59; i++) {
      if (i <= 23) {
          this.hoursLookup.push(i);
      }
      this.minutesLookup.push(i);
    }
  }

  timeDisplay(time: number): string {
    const disp = time != null ? time.toString().padStart(2, '0') : '';    
    return disp;
  }

  get value(): Date {
    const date = this._value;
    return date;
  }

  set value(val: Date) {    
    if (val) {      
      this._value = val;
      this.date = this._value;
      this.hours = this._value.getHours();
      this.minutes = this._value.getMinutes();      
      this.propagateChange(this._value);
    } else {
      this._value = val;
      this.propagateChange(val);
    }
  }

  emitTime($event) {    
    if(this.date != null && this.hours != null && this.minutes != null) {
      this.date.setHours(this.hours);
      this.date.setMinutes(this.minutes);
      this.value = this.date;        
    } else {
      this.value = null;
    }        
  }
  
  writeValue(value: any) {
    console.log(value);
    if (value !== undefined) {
      this.value = value;      
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
