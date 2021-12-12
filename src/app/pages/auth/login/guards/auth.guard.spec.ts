import { AuthService } from 'src/app/pages/auth/login/services/auth.service';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        AuthService,
        { provide: Router, useValue: router },
        // { provide: Router, useValue: { navigate: (): any => null } },
        { provide: AuthService, useValue: authService },
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  // it('AuthGuard - No debe permitir acceso cuando no se ha iniciado sesion', () => {
  //   guard = TestBed.inject(AuthGuard);
  //   authService = TestBed.inject(AuthService);
  //   authService.isAuthenticated=false;
  //   expect(guard.canActivate(null, null)).toBe(false);
  //   // const guardResponse = guard.canActivate(null, null);
  //   // expect(guardResponse).toBeFalsy();
  // });

  // it('AuthGuard - Se debe permitir acceso cuando se ha iniciado sesion', () => {
  //   window.localStorage.setItem('token',`{"name":"Pepito Perez","email":"pperez@perez.com"}`)
  //   const authService = TestBed.get(AuthService);
  //   authService.isLoggedIn = true;
  //   const res = guard.canActivate(null, null);
  //   expect(res).toBeTruthy();
  // });
});
