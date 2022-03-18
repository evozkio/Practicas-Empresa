import { Component } from '@angular/core';
import listadeProductos from 'src/assets/json/productos.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maquetacion-2';
  datos : number[] = [1,2,3,4,5];
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  Productos:any = listadeProductos;
  ProductoMostrar:any = listadeProductos[3];



  buscar(){
    let palabra: string = "8"
    let miarray: string[];

    for (var val of listadeProductos) {
      if (val.referencia.indexOf(palabra)>0){
        console.log(val.referencia);
      }
    }

  }
}
