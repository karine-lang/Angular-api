import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfessoresModel } from './professores.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {


  //injetando serviço que implementa todos os verbos
  constructor(private httpClient: HttpClient) { }



  getAll() {
    return this.httpClient.get<ProfessoresModel[]>(`${environment.apiUrl}/professores`)

  }

  save(professorObj: any) {
    return this.httpClient.post<ProfessoresModel>(`${environment.apiUrl}/professores`, professorObj)
  }

  delete(id : number){
    return this.httpClient.delete(`${environment.apiUrl}professores/${id}`)
  }

  getOne(id: number) {
    return this.httpClient.get<ProfessoresModel>(`${environment.apiUrl}/professores/${id}`)
  }
  update(id: number, professorObj: any){
    return this.httpClient.patch<ProfessoresModel>(`${environment.apiUrl}/professores/${id}`, professorObj);
  }



}
