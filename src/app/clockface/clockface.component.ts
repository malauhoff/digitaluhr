import { Component } from '@angular/core';
import { DigitNumberComponent } from '../digit-number/digit-number.component';

@Component({
  selector: 'app-clockface',
  templateUrl: './clockface.component.html',
  styleUrls: ['./clockface.component.css']
})
export class ClockfaceComponent {
    hours: DigitNumberComponent = new DigitNumberComponent();
    minutes: DigitNumberComponent = new DigitNumberComponent();
    seconds: DigitNumberComponent = new DigitNumberComponent();

    

}
