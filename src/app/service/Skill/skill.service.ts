import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/model/Entidades/Skill/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {


  url = 'http://localhost:8080/skill/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.url + 'lista');
  }
  public verExperiencia(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.url + `ver/${id}`);
  }
  public crear(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', skill);
  }
  public editar(skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.url + 'editar', skill);
  }
  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
}
