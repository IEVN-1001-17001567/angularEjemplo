import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
    
  funcion:string='';
  num1:string='';
  num2:string='';
  resultado:number=0;

  calcular():void{
    switch (this.funcion) {
      case 'suma':
        this.resultado=parseInt(this.num1)+parseInt(this.num2);
        break;

      case 'resta':
        this.resultado=parseInt(this.num1)-parseInt(this.num2);
        break;
  
      case 'multi':
        this.resultado=parseInt(this.num1)*parseInt(this.num2);        
        break;
  
      case 'divi':
        this.resultado=parseInt(this.num1)/parseInt(this.num2);        
        break;
    
      default:
        break;
    }
  }
}
