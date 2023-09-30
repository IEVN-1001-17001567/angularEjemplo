import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {
  funcion:string='';
  num1:string='';
  num2:string='';
  resultado:number=0;
  res:number=0;

  sumar(){
    this.res=parseInt(this.num1)+parseInt(this.num2);
  }
  
}

