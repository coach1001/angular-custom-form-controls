import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {    
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      dateTime: [null, [Validators.required]],
      wallDamages: [null, [Validators.required]]
    });

    this.formGroup.controls['wallDamages'].valueChanges.subscribe((val) =>{
      console.log(val);
    });

    this.options.push(
      { key: 0, value: 'Option - 1'},
      { key: 1, value: 'Option - 2'},
      { key: 2, value: 'Option - 3'}
    )
  }
}
