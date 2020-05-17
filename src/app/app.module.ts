import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { bgPopupDirective } from './bgPopup/bgPopup.directive';

@NgModule({
  declarations: [
    AppComponent,
    bgPopupDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
