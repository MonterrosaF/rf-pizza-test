import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Store } from 'src/app/shared/models/store.interface';

import { StoreModalComponent } from './store-modal.component';

describe('StoreModalComponent', () => {
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
  let component: StoreModalComponent;
  let fixture: ComponentFixture<StoreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [StoreModalComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
    ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreModalComponent);
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

  it('Store-Modal - funcion getUrl debe retornar string que contenga el nombre de la tienda', () => {
    expect(component.getUrl()).toContain(component.storeData.name);
  });
});
