import { Component, OnDestroy, OnInit } from '@angular/core';
import { Dominio } from 'src/app/core/types/type';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { DominioService } from 'src/app/core/services/dominio.service';
import { User } from 'src/app/core/types/type';

@Component({
  selector: 'app-preferencia-conta',
  templateUrl: './preferencia-conta.page.html',
  styleUrls: ['./preferencia-conta.page.scss'],
})
export class PreferenciaContaPage implements OnInit, OnDestroy {

  transporte: Dominio[];
  opcoesTrajeto: Dominio[];
  user: User;

  constructor(private cadastroService: CadastroService, 
    private dominioService: DominioService) { 
  }

  ngOnInit() :void {
    this.cadastroService.buscarCadastro().subscribe((user: User) =>{
      this.user = user;
    });
    this.dominioService.buscarTransporte().subscribe((transporte: Dominio[]) =>{
      this.transporte = transporte;
    });
    this.dominioService.buscarOpcaoTrajeto().subscribe((opcoesTrajeto: Dominio[]) =>{
      this.opcoesTrajeto = opcoesTrajeto;
    });
  }

  ngOnDestroy() :void{
    this.cadastroService.editarPreferencia(this.user.preferencia).subscribe(() =>{
      //console.log("Save");
    });
  }

}