import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {

  focus1: boolean = false;
  focus2: boolean = false;
  habilitar2: string | undefined;
  value1: string;
  value2: string;

  constructor() { }

  ngOnInit() {
  }

  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results1 = [...this.data];
  public results2 = [...this.data];

  handleInput(event: any, num: number) {
    console.log(event);
    const query = event.target.value.toLowerCase();
    this.results1 = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
    this.habilitar2 = this.data.find(cidade => cidade.toLowerCase() === query);
   
   
  }

  handleFocus(num: number) {
    if(num === 1){
      this.focus1 = true;
    }else{
      this.focus2 = true;
    }
  }

  handleBlur(num: number) {
    if(num === 1){
      this.focus1 = false;
    }else{
      this.focus2 = false;
    }
  }

}
