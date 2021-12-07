import { firstValueFrom } from 'rxjs';
import { DataService } from './../../../../shared/services/data.services';
import { Injectable } from '@angular/core';
import { User } from './../../../../shared/models/user.interface';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    public jwtHelper: JwtHelperService
  ) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token') || '';
    console.log(token)
    if (!token) return false;
    return true;
    // return !this.jwtHelper.isTokenExpired(token); // Se retorna true en caso de existir token un fake JWT
  }

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
    delete userFromJSON.password;
    delete userFromJSON.id;
    localStorage.setItem('token', JSON.stringify(userFromJSON));
    return userFromJSON;
  }
}
