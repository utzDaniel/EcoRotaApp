export class User {
    nome: string | null;
    email: string | null;
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

  export interface Opcao {
    label: string;
    value: any;
  }

  export interface Viagens {
    data: string
    partida: string;
    destino: string;
    distancia: number;
    tempo: number;
    carbono: number;
    dinheiro: number;
  }