import { User } from './../../../shared/models/user.interface';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  @BlockUI() blockUI: NgBlockUI;
  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.blockUI.start('Loading...');

    let user: User = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authService
      .login(user)
      .then((e) => console.log(e))
      .catch((e) => {
        Swal.fire({
          title: 'Error!',
          text: e,
          icon: 'error',
          confirmButtonColor: '#fac344'
        });
      })
      .finally(() => this.blockUI.stop());
  }
}
