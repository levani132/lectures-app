import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { AccountCreatorComponent } from './shell/account-creator/account-creator.component';
import { AccountElementComponent } from './shell/account-element/account-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    AccountCreatorComponent,
    AccountElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
