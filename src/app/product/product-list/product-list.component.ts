import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  ///directivas *ngif : sirve para no mostrar información si no existe nada se utiliza en
  product:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      'year':"febrero 3 2020",
      "Precio":120000,
      "Marca":"Nissan",
      "Color":"Naranja",
      "imagenUrl":"https://wieck-nissanao-production.s3.amazonaws.com/photos/cc12bb6c50b6ff98695d616be92cb3183849636e/preview-928x522.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas familiar",
      'year':"febrero 3 2021",
      "Precio":200000,
      "Marca":"Audi",
      "Color":"Azul",
      "imagenUrl":"https://www.audicenterlopezmateos.com.mx/content/dam/iph/international/mx/MEX00000/stage/Stage_S4sedan_2021.jpg/jcr:content/renditions/cq5dam.thumbnail.720.406.iph.png?imwidth=720&imdensity=1"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      'year':"Marzo 5 2022",
      "Precio":150000,
      "Marca":"Kia",
      "Color":"Verde",
      "imagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpGDAcRMY_NDxU077_yNU2FGX3t9onWZFHZg&usqp=CAU"
  }
]

}
