import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartella',
  templateUrl: './cartella.component.html',
  styleUrls: ['./cartella.component.css']
})
export class CartellaComponent {
  @Input()NZ:number;
  @Input()vettoZXo:number[]; // array
  constructor(){
    this.NZ= 0; 
    this.vettoZXo= [];
  } 
}
