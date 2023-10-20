import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  cadastrar(pessoaUsuaria: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria);
  }

  buscarCadastro(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/auth/perfil`);
  }

  editarCadastro(pessoaUsuaria: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/auth/perfil`, pessoaUsuaria);
  }

}
