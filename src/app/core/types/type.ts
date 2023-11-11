export class User {
    nome: string | null;
    email: string | null;
    preferencia: Preferencia;
  }

  export interface Preferencia {
    onibusAtivo: boolean;
    metroAtivo: boolean;
    bicicletaAtivo: boolean;
    opcaoTrajeto: number;
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
    id: number;
    nome: string;
  }

  export interface Historico {
    distancia: HistoricoRecurso
    tempo: HistoricoRecurso;
    carbono: HistoricoRecurso;
    dinheiro: HistoricoRecurso;
    item: HistoricoItem[];
  }

  export interface HistoricoRecurso {
    nome: string
    soma: number;
    medida: string;
  }

  export interface HistoricoItem {
    data: string;
    partida: string;
    destino: string;
    distancia: number;
    tempo: number;
    carbono: number;
    dinheiro: number;
  }

  export interface Trajeto {
    nome: string;
    numero: number;
    tempo: number;
  }