import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/Entidades/Experiencia/experiencia';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  

  
  url: string;

  constructor(private httpClient: HttpClient) { 
    if (environment.production) {
      this.url = 'https://backendram3.onrender.com/experiencia/';
    } else {
      this.url = 'http://localhost:8080/experiencia/';
    }
  }

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }
  public verExperiencia(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
  }
  public crear(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }
  public editar(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, experiencia);
  }
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}