import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class  RegisterComponent {
  signupForm: FormGroup;
  errorMessage: string = '';
  
  constructor(private fb: FormBuilder, private router: Router,private toastr:ToastrService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
  if (this.signupForm.invalid) return;

  const { name, email, password, confirmPassword } = this.signupForm.value;

  if (password !== confirmPassword) {
    this.toastr.error("Passwords do not match");
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const existingUser = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase());

  if (existingUser) {
    this.toastr.error("User already exists. Please login.");
    return;
  }

  const newUser = {
    id: Date.now(),
    name,
    email, 
    password,
    isBlocked: false,
    orders: []
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

 
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isLoggedIn');

  this.toastr.success("Account created successfully! Please log in.");
  this.router.navigate(['/auth/login']);
}

}

