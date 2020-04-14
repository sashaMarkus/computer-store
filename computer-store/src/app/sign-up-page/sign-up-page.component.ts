import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.registerForm.controls };

  onSubmit() {
    this.submitted = true;
    
    if(this.registerForm.invalid) {
      //this.submitted = false;  
      return;
    }
  }
  
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
