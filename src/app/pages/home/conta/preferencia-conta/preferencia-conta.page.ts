import { Component, OnDestroy, OnInit } from '@angular/core';
import { Opcao } from 'src/app/core/types/type';

@Component({
  selector: 'app-preferencia-conta',
  templateUrl: './preferencia-conta.page.html',
  styleUrls: ['./preferencia-conta.page.scss'],
})
export class PreferenciaContaPage implements OnInit, OnDestroy {

  opcoesTransporte: Opcao[];
  opcoesTrajeto: Opcao[];
  opcaoSelecionadaTrajeto: number;

  constructor() { 
  }

  ngOnInit() :void {
    this.opcoesTransporte = [
      { label: 'Ônibus', value: false },
      { label: 'Metro', value: true },
      { label: 'Bicicleta', value: true }
    ];
    this.opcoesTrajeto = [
      { label: 'Melhor trajeto', value: 1 },
      { label: 'Mais sustentável', value: 2 },
      { label: 'Mais econômico', value: 3 }
    ];
    this.opcaoSelecionadaTrajeto = 2;
  }

  selecionarIcon(label: string) :string {
  if(label === 'Ônibus') 
    return 'bus';
  else if(label === 'Metro') 
    return 'subway';
  else (label === 'Bicicleta') 
    return 'bicycle';
  }

  ngOnDestroy() :void{
    console.log("OnDestroy");
    console.log("Save");
  }

}