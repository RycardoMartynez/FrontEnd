import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/Entidades/Usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://backendram3.onrender.com/usuario/';
 
  loggedInKey = 'loggedIn'; // Clave para almacenar el estado de inicio de sesión en el almacenamiento local

  constructor(private httpClient: HttpClient) { }

  public verUsuario(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.url + `ver/${id}`);
  }

  public login(nombreU: string, password: string): Observable<boolean> {
    const loginData = {
      nombreU: nombreU,
      password: password
    };

    return this.httpClient.post<boolean>(this.url + 'login', loginData);
  }

  public isLoggedIn(): boolean {
    const loggedInValue = localStorage.getItem(this.loggedInKey);
    return loggedInValue === 'true';
  }

  public setLoggedIn(value: boolean): void {
    localStorage.setItem(this.loggedInKey, value.toString());
  }
}
