import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountCreatorComponent } from './account-creator/account-creator.component';
import { AccountComponent } from './account/account.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountCreatorComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
