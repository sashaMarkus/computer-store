import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router:Router) {
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(7)]]
    })
  }
  get f() { return this.registerForm.controls };

  onSubmit() {
    this.submitted = true;
    
    if(this.registerForm.invalid) {
      //this.submitted = false;  
      return;
    }else {
      this.router.navigate(['/sign-up-page-next-step']);
    }
  }
}
