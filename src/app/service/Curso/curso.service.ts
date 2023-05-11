import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/model/Entidades/Curso/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://localhost:8080/curso/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.url + 'lista');
  }
  public verExperiencia(id: number): Observable<Curso> {
    return this.httpClient.get<Curso>(this.url + `ver/${id}`);
  }
  public crear(curso: Curso): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', curso);
  }
  public editar(id: number, curso: Curso): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, curso);
  }
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
