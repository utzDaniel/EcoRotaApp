
import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-buscar-bar',
  templateUrl: './buscar-bar.component.html',
  styleUrls: ['./buscar-bar.component.scss'],
})
export class BuscarBarComponent implements OnInit {

  @Input()
  data: String[];

  @Input()
  texto: String;

  @Output() 
  retornar = new EventEmitter<any>();

  retorno: String | undefined;
  
  focus: boolean = false;
  value: String | undefined;

  results: String[];
  
  constructor() { }

  ngOnInit() {
    this.results = [...this.data.slice(0, 3)];
  }

  handleInput(event: any) :void {
    const query = event.target.value;
    this.selectItem(query);
  }

  handleClear() :void {
    this.value = undefined;
    this.retorno = undefined;
    this.results = [...this.data.slice(0, 3)];
    this.retornar.emit(this.retorno);
  }

  handleFocus() :void {
    this.focus = true;
  }

  handleBlur() :void {
    if(this.retorno){
      this.focus = false;
    }
  }

  handleChange() :void {
    //console.log("Change");
  }

  selectItem(label: string) :void {
    const query = label.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1).slice(0, 3);
    this.retorno = this.data.find((d) => d.toLowerCase() === query);
    if(this.retorno){
      this.value = this.retorno.slice();
      this.focus = false;
      this.retornar.emit(this.retorno);
    }
  }

}
