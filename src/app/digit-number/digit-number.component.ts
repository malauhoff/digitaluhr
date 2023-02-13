import { Component } from '@angular/core';

@Component({
  selector: 'app-digit-number',
  templateUrl: './digit-number.component.html',
  styleUrls: ['./digit-number.component.css']
})
export class DigitNumberComponent {
  counter = 0;
  private _limit!: number;
  
  public get limit(): number {
    return this._limit;
  }
  public set limit(value: number) {
    this._limit = value;
  }

  
  public setCounter(value: number) {
    this.counter = value;
  }

  public updateCounter() {
    this.counter++;
  }
}
