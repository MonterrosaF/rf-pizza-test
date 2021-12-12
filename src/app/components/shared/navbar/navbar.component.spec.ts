import { AuthService } from 'src/app/pages/auth/login/services/auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [NavbarComponent],
      providers: [
        AuthService,
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Navbar - Debe existir un hipervinculo que redirija a Pizzerias', () => {
    const instance = fixture.nativeElement as HTMLElement;
    const pizzeriaAnchor = instance
      .querySelector('.router .menu a')
      .getAttribute('routerLink');
    expect(pizzeriaAnchor).toContain('/stores');
  });

  it('Navbar - El hipervinculo que redirije a Pizzerias debe tener el label "Pizzerias"', () => {
    const instance = fixture.nativeElement as HTMLElement;
    const pizzeriaAnchor = instance.querySelector('.router .menu a')
      .textContent;
    expect(pizzeriaAnchor).toContain('Pizzerias');
  });

  it('Navbar - Dar click en el boton de "Salir" debe cerrar sesión', () => {
    const spyReload = spyOn(component, 'onLogout');
    const instance = fixture.nativeElement;
    const logoutButton = instance.querySelector('.logout');
    logoutButton.click();
    expect(component.onLogout).toHaveBeenCalled();
  });

  it('Navbar - Dar click en el boton de "Salir" debe borrar el localStorage para el atributo "TOKEN"', () => {
    const instance = fixture.nativeElement;
    const logoutButton = instance.querySelector('.logout');
    logoutButton.click();
    expect(window.localStorage.length).toBeFalsy();
  });

  it('Navbar - Dar click en el logo debe recargar la pagina', () => {
    const spyReload = spyOn(component, 'onHomeClick');
    const instance = fixture.nativeElement;
    const logoIcon = instance.querySelector('.pizza-image-background img');
    logoIcon.click();
    expect(component.onHomeClick).toHaveBeenCalled();
  });

  it('Navbar - Funcion onHomeClick debe redirigir al store', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.onHomeClick();
    expect(navigateSpy).toHaveBeenCalledWith(['/stores']);
  });
});
