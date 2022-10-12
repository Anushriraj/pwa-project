import { Component } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jwtToken: any;
  decoded: any;
  userName!: string;
  password!: string;
  pin!: string;
  loginForm!: UntypedFormGroup;

  constructor(private _formBuilder: FormBuilder) { 
    this.loginForm = this._formBuilder.group({
      userName: new UntypedFormControl(''),
      password: new UntypedFormControl(''),
    });
  }

  login() {
    this.loginForm.reset();
  }
}
