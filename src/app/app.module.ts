import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { AccountComponent } from './shell/account/account.component';
import { AccountsComponent } from './shell/accounts/accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    AccountComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
