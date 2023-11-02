import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {

  focus1: boolean = false;
  focus2: boolean = false;
  value1: String | undefined;
  value2: String | undefined;
  results1: String[];
  results2: String[];
  data1: String[];
  data2: String[];

  constructor() { }

  ngOnInit() {
    this.data1 = [
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
    this.results1 = [...this.data1.slice(0, 3)];
  }

  handleInput(event: any) :void {
    const query = event.target.value.toLowerCase();
    if(this.value1){
      this.results2 = this.data2.filter((d) => d.toLowerCase().indexOf(query) > -1).slice(0, 3);
      this.value2 = this.data2.find(cidade => cidade.toLowerCase() === query);
    }else{
      this.results1 = this.data1.filter((d) => d.toLowerCase().indexOf(query) > -1).slice(0, 3);
      this.value1 = this.data1.find(cidade => cidade.toLowerCase() === query);
      if(this.value1){
        this.data2 = [...this.data1.filter(item => item !== this.value1)];
        this.results2 = [...this.data2.slice(0, 3)];
      } 
    }
  }

  handleClear(num: number) :void{
    if(num === 1){
      this.value1 = undefined;
      this.results1 = [...this.data1.slice(0, 3)];
      this.data2 = [];
      this.results2 = [];
      this.focus2 = false;
    }
    this.results2 = [...this.data2.slice(0, 3)];
    this.value2 = undefined;

  }

  handleFocus(num: number) :void {
    if(num === 1){
      this.focus1 = true;
    }else{
      this.focus2 = true;
    }
  }

  handleBlur(num: number) :void{
    if(num === 1){
      this.focus1 = false;
    }else{
      this.focus2 = false;
      if(this.value2 && this.value1){
        console.log("Completo");
        console.log(this.value1);
        console.log(this.value2);
      } 
    }
  }

  handleChange(event: any) :void {
    console.log("Change");
  }

}
