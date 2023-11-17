import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserCadastro } from '../types/type';
import { User } from '../types/type';
import { UserEditar } from '../types/type';
import { Preferencia } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  cadastrar(user: UserCadastro): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/usuario`, user);
  }

  buscarCadastro(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/usuario`);
  }

  editarCadastro(user: UserEditar): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/usuario`, user);
  }

  editarPreferencia(preferencia: Preferencia): Observable<Preferencia> {
    return this.http.put<Preferencia>(`${this.apiUrl}/usuario/preferencia`, preferencia);
  }

}
