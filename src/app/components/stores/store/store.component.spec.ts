import { StoreModalComponent } from './../store-modal/store-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from './../../../shared/models/store.interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';
// import {OVERLAY_PROVIDERS} from "@angular/material";
import { OverlayModule } from '@angular/cdk/overlay';

import { StoreComponent } from './store.component';
import { of } from 'rxjs';

describe('StoreComponent', () => {
  let testStore: Store = {
    id: 5,
    name: 'Pizzeria Spider Man',
    address: 'Calle 5 #6-7',
    description: 'Esta pizzeria se especializa en ingredientes tropicales',
    products: [
      {
        id: 1,
        name: 'Pizza de Pollo',
      },
      {
        id: 2,
        name: 'Piza Pollo y Champiñones',
      },
      {
        id: 3,
        name: 'Pizza Vegetales',
      },
      {
        id: 4,
        name: 'Pizza Vegetales y Atun ',
      },
      {
        id: 5,
        name: 'Pizza 3 Quesos con Champiñones',
      },
      {
        id: 6,
        name: 'Pizza Jamon y Queso',
      },
    ],
  };
  let dialogSpy: jasmine.Spy;
  let dialogRefSpyObj = jasmine.createSpyObj({
    afterClosed: of({}),
    close: null,
  });
  dialogRefSpyObj.componentInstance = {};
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [StoreComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    component.storeData = testStore;
    dialogSpy = spyOn(TestBed.inject(MatDialog), 'open').and.returnValue(
      dialogRefSpyObj
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Store - Dada la tienda con ID 5 se deben setear correctamente los datos de la imagen', () => {
    const instance = fixture.nativeElement as HTMLElement;
    const storeImage = instance
      .querySelector('.single-store img:first-child')
      .getAttribute('src');
    expect(storeImage).toContain(testStore.name);
  });

  it('Store - Dada la tienda con ID 5 se deben setear correctamente los datos del nombre', () => {
    const instance = fixture.nativeElement as HTMLElement;
    const storeName = instance.querySelector('.store-main p').textContent;
    expect(storeName).toContain(testStore.name);
  });

  it('Store - Dada la tienda con ID 5 se deben setear correctamente los datos de la direccion', () => {
    const instance = fixture.nativeElement as HTMLElement;
    const storeAddress = instance.querySelector('.store-main sub').textContent;
    expect(storeAddress).toContain(testStore.address);
  });

  it('Store - Dada la tienda con ID 5 se deben setear correctamente los datos de la direccion', () => {
    const instance = fixture.nativeElement as HTMLElement;
    const storeAddress = instance.querySelector('.store-main sub').textContent;
    expect(storeAddress).toContain(testStore.address);
  });

  it('Store - La funcion openModal debe abrir una ventana Modal en la pantalla con la informacion del ID 5', () => {
    component.openModal();
    expect(dialogSpy).toHaveBeenCalled();
    expect(dialogSpy).toHaveBeenCalledWith(
      StoreModalComponent,
      Object({
        panelClass: 'custom-dialog-container',
        data: Object({
          store: Object({
            id: 5,
            name: 'Pizzeria Spider Man',
            address: 'Calle 5 #6-7',
            description:
              'Esta pizzeria se especializa en ingredientes tropicales',
            products: [
              Object({ id: 1, name: 'Pizza de Pollo' }),
              Object({ id: 2, name: 'Piza Pollo y Champiñones' }),
              Object({ id: 3, name: 'Pizza Vegetales' }),
              Object({ id: 4, name: 'Pizza Vegetales y Atun ' }),
              Object({ id: 5, name: 'Pizza 3 Quesos con Champiñones' }),
              Object({ id: 6, name: 'Pizza Jamon y Queso' }),
            ],
          }),
        }),
      })
    );
    // expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
  });
});
