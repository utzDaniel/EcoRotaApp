import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { AuthResponse } from '../types/type';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {}

  autenticar(email: string, senha: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      { email, senha },
      { observe: 'response'}
    ).pipe(
      tap((response: HttpResponse<AuthResponse>) => {
        const authToken = response.body?.token || '';
        this.userService.salvarToken(authToken);
      })
    );
  }

}
