import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { ControlOption } from '../app.component';

@Component({
  selector: 'app-select-button-input',
  templateUrl: './select-button-input.component.html',
  styleUrls: ['./select-button-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectButtonInputComponent),
      multi: true
    }
  ]
})
export class SelectButtonInputComponent
  implements ControlValueAccessor, OnInit {

  public _value: Array<any> = [];
  public buttonColor: Array<string> = [];

  @Input()
  disabled = false;

  @Input()
  options: Array<ControlOption> = [];

  constructor() {}

  ngOnInit() {}

  get value() {
    const selectedOptions = this._value;
    return selectedOptions;
  }

  set value(val) {
    if (val) {
      this._value = val;      
      this.propagateChange(this._value);
    }
  }

  toggled(index: number) {    
    const keyOfToggled = this.options[index].key;    
    return this.value.indexOf(keyOfToggled) > -1 ? 'primary' : '';
  }

  toggleSelection(index: number) {    
    const keyOfToggled = this.options[index].key;
    const indexOfToggled =this.value.indexOf(keyOfToggled);
    if(indexOfToggled > -1) {
      this.value.splice(indexOfToggled, 1);
      this.value = this.value;
    } else {
      this.value = [...this.value, keyOfToggled];      
    }
  }
  
  /* Takes the value  */
  writeValue(value: any) {        
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
