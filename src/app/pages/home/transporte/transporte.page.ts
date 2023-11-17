import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DominioService } from 'src/app/core/services/dominio.service';
import { MapaService } from 'src/app/core/services/mapa.service';
import { HistoricoService} from 'src/app/core/services/historico.service';
import { ChartLineComponent} from 'src/app/shared/chart-line/chart-line.component';
import { Local } from 'src/app/core/types/type';
import { Mapa } from 'src/app/core/types/type';
import { Historico } from 'src/app/core/types/type';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {

  @ViewChild(ChartLineComponent, { static: false }) 
  childComponent: ChartLineComponent;

  locais: Local[];
  dataLocalPartida: String[];
  dataLocalDestino: String[];
  mapa: Mapa;
  partida: Local;
  openDestino: boolean;
  openDrawer: boolean;
  classOpenDrawer: boolean;
  selecionado: boolean;
  historico: Historico;

  constructor(private route: ActivatedRoute,
    private dominioService: DominioService,
    private mapaService: MapaService,
    private historicoService: HistoricoService) { }

  ngOnInit() {
    this.dominioService.buscarLocal().subscribe((locais: Local[]) =>{
      this.locais = locais;
      this.dataLocalPartida = [...this.locais.map((d) => d.nome)];
    });
    this.route.paramMap.subscribe(() => {
      this.reload();
    });
  }

  reload():void {
    this.mapa = new Mapa();
    this.openDestino = false;
    this.openDrawer = false;
    this.classOpenDrawer = true;
    this.selecionado = false;
    if(this.childComponent) this.childComponent.newData([]);
  }

  retornoLocalPartida(dados: any) :void {
    this.openDrawer = false;
    this.classOpenDrawer = true;
    this.buscarIdPorNome(dados, true);
    this.dataLocalDestino = [...this.locais.filter((d) => d.id !== this.mapa.partida).map(v => v.nome)];
  }

  retornoLocalDestino(dados: any) :void {
    this.buscarIdPorNome(dados, false);
    if(dados) {
      this.mapaService.buscarMapa(this.mapa).subscribe((mapa: Mapa) =>{
        this.mapa = mapa;
        this.openDrawer = true;
        this.childComponent.newData(mapa.opcoes[0].deslocamento[0].points);
      });
    }
    else this.openDrawer = false;
    this.classOpenDrawer = true;
  }

  selecionadoOpcao(indexOpcao: number) {
    if(this.isSelecionado(indexOpcao)){
      this.marcaSelecionado(indexOpcao);
      this.gravarHistorico();
      this.classOpenDrawer = false;
    }else{
      this.classOpenDrawer = !this.classOpenDrawer;
    }
  }

  selecionarClassOpenDrawer() :string{
    if(this.classOpenDrawer){
      return this.mapa.opcoes.length == 1 ? "open_drawer_1" : "open_drawer_2";
    }
    return "closed_drawer";
  }

  buscarIdPorNome(dados: any, partida: boolean) {
    const local = this.locais.find(v => v.nome === dados);
    if (local) {
      if(partida){
        this.mapa.partida = local.id;
        this.childComponent.newData([local.point]);
        this.openDestino = true;
        this.partida = local;
      }else{
        this.mapa.destino = local.id;
        this.childComponent.addData(local.point);
      }
    }else{
      if(partida){
        this.openDestino = false;
        this.childComponent.newData([]);
      }else if(this.childComponent.sizeData() == 2){
        this.childComponent.removeUltimoData();
      }else{
        this.childComponent.newData([this.partida.point]);
      }
    }
  }

  isSelecionado(indexOpcao: number) :boolean {
    return indexOpcao >= 0;
  }

  marcaSelecionado(indexOpcao: number) :void {
    this.selecionado = true;
    this.mapa.opcoes[indexOpcao].selecionado = true;
  }

  resetarSelecionado() :void {
    this.selecionado = false;
    this.mapa.opcoes.forEach(op => op.selecionado = false);
  }
  
  gravarHistorico() :void {
    if(this.selecionado) {
      this.historicoService.gravarHistorico(this.mapa).subscribe((historico: Historico) =>{
        this.historico = historico;
      });
    }
  }

}
