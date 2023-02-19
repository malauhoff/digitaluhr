import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockfaceComponent } from './clockface/clockface.component';
import { DigitNumberComponent } from './digit-number/digit-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockfaceComponent,
    DigitNumberComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
