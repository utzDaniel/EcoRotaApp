export interface User {
    nome: string;
    email: string;
  }

  export interface Login {
    email: string;
    senha: string;
  }

  export interface UserCadastro {
    nome: string;
    email: string;
    senha: string;
  }

  export interface AuthResponse {
    token: string;
  }

  export interface UserEditar {
    nome: string;
    novaSenha: string;
    novaSenhaRepetida: string;
    senhaAtual: string;
  }