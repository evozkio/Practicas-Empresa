import { Component, OnInit } from '@angular/core';
import listadeProductos from 'src/assets/json/productos.json';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  Productos:any = listadeProductos;
  valorBuscador='';
  miarray: string[] = [];


  buscar(){
    let palabra: string = this.valorBuscador;
    this.miarray= [];
    for (var val of listadeProductos) {
      if (val.referencia.indexOf(palabra)>0){
        this.miarray.push(val.referencia)
      }
    }
    console.log(this.miarray)
  }

}
