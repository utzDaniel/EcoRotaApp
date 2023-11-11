import { Component, OnDestroy, OnInit } from '@angular/core';
import { Opcao } from 'src/app/core/types/type';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { DominioService } from 'src/app/core/services/dominio.service';
import { User } from 'src/app/core/types/type';

@Component({
  selector: 'app-preferencia-conta',
  templateUrl: './preferencia-conta.page.html',
  styleUrls: ['./preferencia-conta.page.scss'],
})
export class PreferenciaContaPage implements OnInit, OnDestroy {

  transporte: Opcao[];
  opcoesTrajeto: Opcao[];
  user: User;

  constructor(private cadastroService: CadastroService, 
    private dominioService: DominioService) { 
  }

  ngOnInit() :void {
    this.cadastroService.buscarCadastro().subscribe((user: User) =>{
      this.user = user;
    });
    this.dominioService.buscarTransporte().subscribe((transporte: Opcao[]) =>{
      this.transporte = transporte;
    });
    this.dominioService.buscarOpcaoTrajeto().subscribe((opcoesTrajeto: Opcao[]) =>{
      this.opcoesTrajeto = opcoesTrajeto;
    });
  }

  ngOnDestroy() :void{
    this.cadastroService.editarPreferencia(this.user.preferencia).subscribe(() =>{
      //console.log("Save");
    });
  }

}