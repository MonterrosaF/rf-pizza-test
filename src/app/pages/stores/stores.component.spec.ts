import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IndividualConfig, ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

import { StoresComponent } from './stores.component';

describe('StoresComponent', () => {
  let toasterServiceSpy: jasmine.Spy;
  const toasterSetvices = jasmine.createSpyObj('toasterSetvices', ['pop']);
  toasterServiceSpy = toasterSetvices.pop.and.returnValue(of(''));
  let testStores = [
    {
      "id": 1,
      "name": "Pizzeria Capitan America",
      "address": "Calle 1 #2-3",
      "description": "Esta pizzeria se especializa en ingredientes salados",
      "products": [
        {
          "id": 1,
          "name": "Pizza de Pollo"
        },
        {
          "id": 2,
          "name": "Piza Pollo y Champiñones"
        },
        {
          "id": 3,
          "name": "Pizza Vegetales"
        },
        {
          "id": 4,
          "name": "Pizza Vegetales y Atun "
        },
        {
          "id": 5,
          "name": "Pizza 3 Quesos con Champiñones"
        },
        {
          "id": 6,
          "name": "Pizza Jamon y Queso"
        }
      ]
    },
    {
      "id": 2,
      "name": "Pizzeria Iron Man",
      "address": "Calle 2 #3-4",
      "description": "Esta pizzeria se especializa en ingredientes picantes",
      "products": [
        {
          "id": 1,
          "name": "Pizza de Pollo"
        },
        {
          "id": 2,
          "name": "Piza Pollo y Champiñones"
        },
        {
          "id": 3,
          "name": "Pizza Vegetales"
        },
        {
          "id": 4,
          "name": "Pizza Vegetales y Atun "
        },
        {
          "id": 5,
          "name": "Pizza 3 Quesos con Champiñones"
        },
        {
          "id": 6,
          "name": "Pizza Jamon y Queso"
        }
      ]
    },
    {
      "id": 3,
      "name": "Pizzeria Thor",
      "address": "Calle 3 #4-5",
      "description": "Esta pizzeria se especializa en ingredientes vegetales",
      "products": [
        {
          "id": 1,
          "name": "Pizza de Pollo"
        },
        {
          "id": 2,
          "name": "Piza Pollo y Champiñones"
        },
        {
          "id": 3,
          "name": "Pizza Vegetales"
        },
        {
          "id": 4,
          "name": "Pizza Vegetales y Atun "
        },
        {
          "id": 5,
          "name": "Pizza 3 Quesos con Champiñones"
        },
        {
          "id": 6,
          "name": "Pizza Jamon y Queso"
        }
      ]
    },
    {
      "id": 4,
      "name": "Pizzeria Black Widow",
      "address": "Calle 4 #5-6",
      "description": "Esta pizzeria se especializa en ingredientes marinos",
      "products": [
        {
          "id": 1,
          "name": "Pizza de Pollo"
        },
        {
          "id": 2,
          "name": "Piza Pollo y Champiñones"
        },
        {
          "id": 3,
          "name": "Pizza Vegetales"
        },
        {
          "id": 4,
          "name": "Pizza Vegetales y Atun "
        },
        {
          "id": 5,
          "name": "Pizza 3 Quesos con Champiñones"
        },
        {
          "id": 6,
          "name": "Pizza Jamon y Queso"
        }
      ]
    },
    {
      "id": 5,
      "name": "Pizzeria Spider Man",
      "address": "Calle 5 #6-7",
      "description": "Esta pizzeria se especializa en ingredientes tropicales",
      "products": [
        {
          "id": 1,
          "name": "Pizza de Pollo"
        },
        {
          "id": 2,
          "name": "Piza Pollo y Champiñones"
        },
        {
          "id": 3,
          "name": "Pizza Vegetales"
        },
        {
          "id": 4,
          "name": "Pizza Vegetales y Atun "
        },
        {
          "id": 5,
          "name": "Pizza 3 Quesos con Champiñones"
        },
        {
          "id": 6,
          "name": "Pizza Jamon y Queso"
        }
      ]
    }
  ]
  let component: StoresComponent;
  let fixture: ComponentFixture<StoresComponent>;
  let toastrService = {
    success: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
    error: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
  };
  let formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), ToastrModule],
      declarations: [StoresComponent],
      providers: [
        FormBuilder,
        { provide: ToastrService, useValue: toastrService },
        { provide: FormBuilder, useValue: formBuilder },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresComponent);
    component = fixture.componentInstance;
    component.searchInput = formBuilder.group({
      search: [''],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Stores - funcion onSearch debe retornar la tienda con ID 1 si escribimos America', () => {
    let store1 = {
      "id": 1,
      "name": "Pizzeria Capitan America",
      "address": "Calle 1 #2-3",
      "description": "Esta pizzeria se especializa en ingredientes salados",
      "products": [
        {
          "id": 1,
          "name": "Pizza de Pollo"
        },
        {
          "id": 2,
          "name": "Piza Pollo y Champiñones"
        },
        {
          "id": 3,
          "name": "Pizza Vegetales"
        },
        {
          "id": 4,
          "name": "Pizza Vegetales y Atun "
        },
        {
          "id": 5,
          "name": "Pizza 3 Quesos con Champiñones"
        },
        {
          "id": 6,
          "name": "Pizza Jamon y Queso"
        }
      ]
    }
    component.storesList = testStores;
    component.onSearch('America')
    expect(component.storesFiltered).toContain(store1)
  });

  it('Stores - funcion onSearch debe retornar vacio si el input no es encontrado', () => {
    component.storesList = testStores;
    component.onSearch('no existe')
    expect(component.storesFiltered.length).toBeFalsy()
  });

  it('Stores - funcion onSearch debe retornar todas las tiendas si no hay input', () => {
    component.storesList = testStores;
    component.onSearch('')
    expect(component.storesFiltered).toBe(testStores)
  });

});
