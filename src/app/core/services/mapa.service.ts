import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mapa } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  buscarMapa(mapa: Mapa): Observable<Mapa> {
    return this.http.post<Mapa>(`${this.apiUrl}/mapa/trajeto`, mapa);
  }

}
