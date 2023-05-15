import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/model/Entidades/Experiencia/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  

  
  // url='https://backendram3.onrender.com/experiencia/'
  url='http://localhost:8080/experiencia/'

  constructor(private httpClient: HttpClient) {}

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