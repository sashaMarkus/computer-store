import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page-next-step',
  templateUrl: './sign-up-page-next-step.component.html',
  styleUrls: ['./sign-up-page-next-step.component.css']
})
export class SignUpPageNextStepComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      FullName: ['', Validators.required, Validators.minLength(30)]
    })
  }

  get f() { return this.registerForm.controls };

  onSubmit() {
    this.submitted = true;
    
    if(this.registerForm.invalid) {
      return;
    }
  }
}
