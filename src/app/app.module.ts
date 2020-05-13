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

const routes: Routes = [
  {
    path: '',
    component: Bpm000Component
  },
  {
    path: 'krnicp',
    component: KrnicpComponent
  },
  {
    path: 'krnicp/:id/:name',
    component: ClientComponent
  },
  {
    path: 'sto004',
    component: Sto004Component
  }
];

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
    Sto004EditDocComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
