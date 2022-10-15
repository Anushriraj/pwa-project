import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  userName ='Anushri';
  password = 'Anushrisfw@123';
  pin!: string;
  loginForm!: UntypedFormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) { 
    this.loginForm = this._formBuilder.group({
      userName: new UntypedFormControl(''),
      password: new UntypedFormControl(''),
    });
  }

  login() {
    this._router.navigate(['register']);
    //this.loginForm.reset();
  }
}