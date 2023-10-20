import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
//import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<string | null>(null);

  constructor(private tokenService: TokenService) {
    // if(this.tokenService.possuiToken()) {
    //   this.decodificarJWT();
    // }
  }
  retornarUser() {
    return this.userSubject.asObservable();
  }

  salvarToken(token: string, user: string): void {
    this.tokenService.salvarToken(token);
    this.userSubject.next(user);
  }

  logout(): void {
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado(): boolean {
    return this.tokenService.possuiToken();
  }
}



