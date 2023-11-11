import { Component, OnInit } from '@angular/core';
import { Historico } from 'src/app/core/types/type';
import { HistoricoService } from 'src/app/core/services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  historico: Historico;

  constructor(private historicoService: HistoricoService) { }

  ngOnInit() {
    this.historicoService.buscarHistorico().subscribe((historico: Historico) =>{
      this.historico = historico;
    })
  }

}
