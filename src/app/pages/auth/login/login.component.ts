import { User } from './../../../shared/models/user.interface';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'hola',
    email: 'pperez@perez.com',
    password: 'pperezs123',
  };
  loginForm: FormGroup;

  @BlockUI() blockUI: NgBlockUI;
  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.blockUI.start('Loading...');
    this.authService
      .login(this.user)
      .catch((e) => console.log(e))
      .finally(() => this.blockUI.stop());
  }
}
