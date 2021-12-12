import { DataService } from 'src/app/shared/services/data.services';
import { ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StoresService } from './stores.service';

describe('StoresService', () => {
  let service: StoresService;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    });
    service = TestBed.inject(StoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('DataService - getData debe retornar true', () => {
    expect(service.getStoresFromJSON()).toBeTruthy();
  });
});
