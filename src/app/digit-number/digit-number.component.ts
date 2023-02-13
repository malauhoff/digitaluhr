import { Component } from '@angular/core';
import { timevalue } from '../time-value';

@Component({
  selector: 'app-digit-number',
  templateUrl: './digit-number.component.html',
  styleUrls: ['./digit-number.component.css']
})
export class DigitNumberComponent {
  value?: timevalue;
  
  public get limit(): number {
    return this.value.limit;
  }
  public set limit(value: number) {
    this.value.limit = value;
  }

  
  public setCounter(value: number) {
    this.value.value = value;
  }

  public updateCounter() {
    this.value.value++;
  }
}
