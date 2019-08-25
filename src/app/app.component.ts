import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-building-custom-form-control-demo';

  formGroup: FormGroup = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {    
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      dateTime: [null, [Validators.required]]
    });
  }
}
