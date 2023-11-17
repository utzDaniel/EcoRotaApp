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

  export interface Dominio {
    id: number;
    nome: string;
  }

  export interface Local {
    id: number;
    nome: string;
    point: Point;
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

  export class Mapa {
    partida: number;
    destino: number;
    opcoes: Opcao[];
  }

  export interface Opcao {
    deslocamento: Deslocamento[];
    recurso: Recurso;
    selecionado: boolean;
  }

  export interface Deslocamento {
    idTrajeto: number;
    nome: string;
    numero: number;
    recurso: Recurso;
    points: Point[]
  }

  export interface Recurso {
    distancia: number;
    tempo: number;
    carbono: number;
    dinheiro: number;
  }

  export interface Point {
    x: number;
    y: number;
  }