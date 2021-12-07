import { AuthService } from './../auth/login/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
})
export class StoresComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    let userName: string = JSON.parse(localStorage.getItem('token')).name;
    this.toastr.success(`¡Hola de nuevo ${userName}.`, '¡Bienvenido!');
  }

  onLogout(): void {
    this.authService.logout();
    this.route.navigate(['/login'])
  }
}
