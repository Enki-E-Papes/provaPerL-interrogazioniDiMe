import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numerazzo : number;

  constructor(){
    this.numerazzo = 0;
  }
  cliccanza(N:HTMLInputElement){
    this.numerazzo = Number(N.value)
    console.log(this.numerazzo);
    return false
  }
}
