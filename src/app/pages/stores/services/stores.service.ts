import { Store } from './../../../shared/models/store.interface';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.services';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  constructor(private dataService: DataService) {}

  async getStoresFromJSON(): Promise<Store[]> {
    // Como es un archivo plano que incluye informacion de diferente tipo por eso se realiza de esta manera, de modo que tengamos un servicio dedicado a obtener la data y servicios dedicados a entregar la data solicitada
    return (await firstValueFrom(this.dataService.getData())).response.stores;
  }
}
