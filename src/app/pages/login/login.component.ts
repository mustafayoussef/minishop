import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  waiting: boolean = false;
  loginForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private route:Router,private authService:AuthenticationService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.waiting = true;
    let value = this.loginForm.value;
    if (this.loginForm.valid) {
      this.authService.login(value);

      setTimeout(() => {
        this.waiting = false;
      }, 1000);
    }
  }
}
