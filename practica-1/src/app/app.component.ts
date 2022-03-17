import { Component, ElementRef, ViewChild } from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

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
@Component({
  selector: 'ngbd-datepicker-range-popup',
  templateUrl: './datepicker-range-popup.html',
  styles: [`
    .dp-hidden {
      width: 0;
      margin: 0;
      border: none;
      padding: 0;
    }
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    })
}