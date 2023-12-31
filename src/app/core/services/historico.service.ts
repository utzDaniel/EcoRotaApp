import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Historico } from '../types/type';
import { Mapa } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  buscarHistorico(): Observable<Historico> {
    return this.http.get<Historico>(`${this.apiUrl}/historico`);
  }

  gravarHistorico(mapa: Mapa): Observable<Historico> {
    return this.http.post<Historico>(`${this.apiUrl}/historico`, mapa);
  }

}
