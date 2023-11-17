import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Historico } from 'src/app/core/types/type';
import { HistoricoService } from 'src/app/core/services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  historico: Historico;

  constructor(private historicoService: HistoricoService,
    private route: ActivatedRoute) { }

  ngOnInit() :void {
    this.route.paramMap.subscribe(() => {
      this.reload();
    });
  }

  reload():void {
    this.historicoService.buscarHistorico().subscribe((historico: Historico) =>{
      this.historico = historico;
    });
  }
}
