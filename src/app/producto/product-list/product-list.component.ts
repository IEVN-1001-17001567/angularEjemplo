import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  ///directivas *ngif : sirve para no mostrar información si no existe nada se utiliza en
product:any[]=[
  {
    "producto":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas familiar",
    'year':"febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Naranja",
    "imagenUrl":"datos pendientes"
  },
  {
    "producto":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas familiar",
    'year':"febrero 3 2021",
    "Precio":200000,
    "Marca":"AUDI",
    "Color":"Azul",
    "imagenUrl":"datos pendientes"
  },
  {
    "producto":3,
    "Modelo":"Rio",
    "Descripcion":"2 puertas familiar",
    'year':"Marzo 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"Verde",
    "imagenUrl":"datos pendientes"
  }
]

}
