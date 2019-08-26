import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash-es';

export interface ControlOption {
  key: any,
  value: any,
  data?: any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-building-custom-form-control-demo';

  formGroup: FormGroup = null;
  options: Array<ControlOption> = [];
  formValue: any = {
    email: 'coach1001@gmail.com',
    dateTime: new Date(),
    wallDamages: [0,2],
    firstName: 'Francois'
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {    
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      dateTime: [null, [Validators.required]],
      wallDamages: [null, [Validators.required]],
      firstName: [null, [Validators.required]]
    });

    this.formGroup.patchValue(cloneDeep(this.formValue));

    this.options.push(
      { key: 0, value: 'Option - 1'},
      { key: 1, value: 'Option - 2'},
      { key: 2, value: 'Option - 3'}
    )
  }

  reset() {
    this.formGroup.patchValue(cloneDeep(this.formValue));
  }
}
