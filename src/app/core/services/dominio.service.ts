import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dominio } from '../types/type';
import { Local } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class DominioService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  buscarTransporte(): Observable<Dominio[]> {
    return this.http.get<Dominio[]>(`${this.apiUrl}/dominio/transporte`);
  }

  buscarOpcaoTrajeto(): Observable<Dominio[]> {
    return this.http.get<Dominio[]>(`${this.apiUrl}/dominio/opcao-trajeto`);
  }

  buscarLocal(): Observable<Local[]> {
    return this.http.get<Local[]>(`${this.apiUrl}/dominio/local`);
  }

}
