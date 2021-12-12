import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { LoginComponent } from './login.component';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder = new FormBuilder();
  let service: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [LoginComponent],
      providers: [
        AuthService,
        FormBuilder,
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService,
        { provide: FormBuilder, useValue: formBuilder },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    service = new AuthService(null, null, null);
    component.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login - El formulario se debe llenar correctamente', fakeAsync(() => {
    const loginForm = {
      email: 'prueba@prueba.com',
      password: 'prueba',
    };
    component.loginForm.controls['email'].setValue(loginForm.email);
    component.loginForm.controls['password'].setValue(loginForm.password);
    expect(component.loginForm.get('email').value).toContain(loginForm.email);
    expect(component.loginForm.get('password').value).toContain(
      loginForm.password
    );
  }));

  it('Login - El formulario se debe llenar correctamente', fakeAsync(() => {
    const loginForm = {
      email: 'prueba@prueba.com',
      password: 'prueba',
    };
    component.loginForm.controls['email'].setValue(loginForm.email);
    component.loginForm.controls['password'].setValue(loginForm.password);
    expect(component.loginForm.get('email').value).toContain(loginForm.email);
    expect(component.loginForm.get('password').value).toContain(
      loginForm.password
    );
  }));

  it('Login - Al llamar la funcion onSubmit se debe ejecutar el blockUI', () => {
    let blockSpy = spyOn(component.blockUI, 'start');
    component.onSubmit()
    expect(blockSpy).toHaveBeenCalled()
  });

});
