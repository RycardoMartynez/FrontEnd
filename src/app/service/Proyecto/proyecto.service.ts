import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/model/Entidades/Proyecto/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  
  url = 'http://localhost:8080/proyecto/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url + 'lista');
  }
  public verExperiencia(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }
  public crear(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', proyecto);
  }
  public editar(proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.url + 'editar', proyecto);
  }
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}