import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { ShellHeaderComponent } from './shell/shell-header/shell-header.component';
import { ShellSidebarComponent } from './shell/shell-sidebar/shell-sidebar.component';
import { Bpm000Component } from './shell/modules/bpm/bpm000/bpm000.component';
import { KrnicpComponent } from './shell/modules/krn/krnicp/krnicp.component';
import { ClientComponent } from './shell/modules/krn/krnicp/client/client.component';
import { Sto004Component } from './shell/modules/sto/sto004/sto004.component';
import { Sto004DocComponent } from './shell/modules/sto/sto004/sto004-doc/sto004-doc.component';
import { Sto004EditDocComponent } from './shell/modules/sto/sto004/sto004-edit-doc/sto004-edit-doc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './shell/modules/sto/sto004/sto004-edit-doc/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    ShellHeaderComponent,
    ShellSidebarComponent,
    Bpm000Component,
    KrnicpComponent,
    ClientComponent,
    Sto004Component,
    Sto004DocComponent,
    Sto004EditDocComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
