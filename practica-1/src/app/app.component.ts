import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica-1';
  @ViewChild('data') inputData: any; 
  handleClear(){
     this.inputData.nativeElement.value = ' ';
  }
  public muestraConsola(variable:any):void{
    console.log(variable);
  }
}