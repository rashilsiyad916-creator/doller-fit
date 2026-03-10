import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

 onSubmit(): void {
  if (this.loginForm.invalid) return;

  const { email, password } = this.loginForm.value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');

  const user = users.find(
    (u: any) =>
      u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
      u.password.trim() === password.trim()
  );

  if (!user) {
    this.toastr.error('Invalid email or password');
    return;
  }
if (user.isBlocked) {
  this.toastr.error('You have been blocked ');
  return;
}
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isLoggedIn');

  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('currentUser', JSON.stringify(user));

    this.toastr.success('Login Successfull');

  this.router.navigate(['/']);
}


}

