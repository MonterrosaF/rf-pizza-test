import { firstValueFrom } from 'rxjs';
import { DataService } from './../../../../shared/services/data.services';
import { Injectable } from '@angular/core';
import { User } from './../../../../shared/models/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private dataService: DataService) {}

  async login(user: User): Promise<User> {
    const { email, password } = user;
    let users: User[] = (await firstValueFrom(this.dataService.getData()))
      .response.users; // Como es un archivo plano se implementa la funcion 'firstValueFrom' para realizar la validacion desde el mismo archivo, si tuviese que consumir un API de login se haria por medio del observable.
    let userFromJSON: User | undefined = users.find(
      (user) => user.email == email
    );
    if (!userFromJSON) {
      throw 'Usuario inexsistente';
    }
    if (userFromJSON.password != password) {
      throw 'Contraseña incorrecta';
    }
    delete user.password;
    return user;
  }
}
