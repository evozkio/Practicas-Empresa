import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bandera : boolean = false;
  estilo : string = 'GRID';
  datos : number[] = [1,2,3,4,5];
  listas=   [{
      "producto": "hola",
      "comentario": "si",
      "q": "2016",
      "estado": "hola",
      "tipo": "pepito",
      "fecha": "2016",
      "cliente": "Paco"
  },{
    "producto": "hola",
    "comentario": "si",
    "q": "2016",
    "estado": "hola",
    "tipo": "pepito",
    "fecha": "2016",
    "cliente": "Paco"
  },{
    "producto": "hola",
    "comentario": "si",
  "q": "2016",
  "estado": "hola",
  "tipo": "pepito",
  "fecha": "2016",
  "cliente": "Paco"
  }]


  cambiaDatos(){
    if(this.bandera){
      this.datos = [1,2,3,4,5];
    }
    else{
      this.datos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    }
    this.bandera=!this.bandera;
  }
  cambiaEstilo(){
    if(this.estilo==='FLEX'){
      this.estilo='GRID';
    }
    else {
      this.estilo='FLEX';
    }
  }
  @ViewChild('data') inputData: any;
  handleClear(){
     this.inputData.nativeElement.value = ' ';
  }
}
