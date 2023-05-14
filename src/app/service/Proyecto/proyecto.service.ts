import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/model/Entidades/Proyecto/proyecto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  
  
  url: string;

  constructor(private httpClient: HttpClient) { 
    if (environment.production) {
      this.url = 'https://backendram3.onrender.com/proyecto/';
    } else {
      this.url = 'http://localhost:8080/proyecto/';
    }
  }

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }
  public verExperiencia(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }
  public crear(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', proyecto);
  }
  public editar(id:number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, proyecto);
  }
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
