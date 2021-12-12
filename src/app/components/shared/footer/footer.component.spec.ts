import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [FooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Footer - Debe existir un hipervinculo que redirija a Facebook', () => {
    const instance = fixture.nativeElement as HTMLElement;
    const facebookAnchorLink = instance
      .querySelector('#social-media a:first-child')
      .getAttribute('href');
    expect(facebookAnchorLink).toContain(
      'https://www.facebook.com/robinfood.Col/'
    );
  });

  it('Footer - Debe existir un hipervinculo que redirija a Instagram', () => {
    const instance = fixture.nativeElement as HTMLElement;
    const instagramAnchorLink = instance
      .querySelector('#social-media a:last-child')
      .getAttribute('href');
    expect(instagramAnchorLink).toContain(
      'https://www.instagram.com/robinfoodcol/?hl=es'
    );
  });

  it('Footer - Dar click en el logo debe recargar la pagina', () => {
    const spyReload = spyOn(component, 'onHomeClick');
    const instance = fixture.nativeElement;
    const logoIcon = instance.querySelector('footer img');
    logoIcon.click();
    expect(component.onHomeClick).toHaveBeenCalled();
  });

  it('Footer - Funcion onHomeClick debe redirigir al store', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.onHomeClick();
    expect(navigateSpy).toHaveBeenCalledWith(['/stores']);
  });
});
