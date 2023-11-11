import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Opcao } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class DominioService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  buscarTransporte(): Observable<Opcao[]> {
    return this.http.get<Opcao[]>(`${this.apiUrl}/dominio/transporte`);
  }

  buscarOpcaoTrajeto(): Observable<Opcao[]> {
    return this.http.get<Opcao[]>(`${this.apiUrl}/dominio/opcao-trajeto`);
  }

  buscarLocal(): Observable<Opcao[]> {
    return this.http.get<Opcao[]>(`${this.apiUrl}/dominio/local`);
  }

}
