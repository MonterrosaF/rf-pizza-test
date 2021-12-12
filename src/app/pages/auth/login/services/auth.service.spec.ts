import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { User } from 'src/app/shared/models/user.interface';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        AuthService,
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService,
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('AuthService - function isAuthenticate debe retornar false si no existe token en localStorage', () => {
    window.localStorage.clear()
    expect(service.isAuthenticated()).toBe(false);
  });

  it('AuthService - function isAuthenticate debe retornar true si token en localStorage', () => {
    window.localStorage.setItem('token', '{"name":"Pepito Perez","email":"pperez@perez.com"}')
    expect(service.isAuthenticated()).toBe(true);
  });

  it('AuthService - Al hacer login se debe borrar el localstorage', () => {
    service.logout();
    let localStorage = window.localStorage.length;
    expect(localStorage).toBe(0);
  });

  it('AuthService - Al hacer login con usuario inexistente debe arrojar excepcion', async function () {
    let user: User = {
      email: 'prueba@prueba.com',
      password: 'password',
    };
    let request = service.login(user);
    request
      .then(() => {})
      .catch((error) => {
        expect(error).toThrow();
      });
  });

  it('AuthService - Al hacer login con contraseña erronea debe arrojar excepcion', function () {
    let user: User = {
      email: 'pperez@perez.com',
      password: 'password',
    };
    let request = service.login(user);
    request
      .then(() => {})
      .catch((error) => {
        expect(error).toThrowError();
      });
  });

  it('AuthService - Al hacer login con contraseña erronea debe arrojar excepcion', () => {
    let user: User = {
      email: 'pperez@perez.com',
      password: 'pperezs123',
    };
    service
      .login(user)
      .then((resolveValue) => {
        expect(Array.isArray(resolveValue)).toBe(true);
      })
      .catch((err) => fail(err));
  });
});
