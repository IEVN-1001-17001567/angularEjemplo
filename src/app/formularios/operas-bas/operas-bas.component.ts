import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  
  operacion:string='';
  num1:string='';
  num2:string='';
  resultado:number=0;

  switch (this.operacion) {
    case sumar:
      sumar():void{
        this.resultado=parseInt(this.num1)+parseInt(this.num2);
      }
      break;
    case this.restar:
      resta():void{
        this.resultado=parseInt(this.num1)-parseInt(this.num2);
      }
      break;

    case this.multi:
      multiplicar():void{
        this.resultado=parseInt(this.num1)*parseInt(this.num2);
      }
      break;

    case this.divir:
      dividir():void{
        this.resultado=parseInt(this.num1)/parseInt(this.num2);
      }
      break;
  
    default:
      break;
  }
}
