import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numerazzo : number;
  vetto : number[]; // crea l'array 

  constructor(){
    this.numerazzo = 0;
    this.vetto = [];
  }
  cliccanza(N:HTMLInputElement){
    this.numerazzo = Number(N.value)
    console.log(this.numerazzo);
    this.vetto.push(this.numerazzo);
    console.log(this.vetto)
    return false
  }
}
