import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Bpm000Component } from './shell/modules/bpm/bpm000/bpm000.component';
import { KrnicpComponent } from './shell/modules/krn/krnicp/krnicp.component';
import { ClientComponent } from './shell/modules/krn/krnicp/client/client.component';
import { Sto004Component } from './shell/modules/sto/sto004/sto004.component';
import { Sto004DocComponent } from './shell/modules/sto/sto004/sto004-doc/sto004-doc.component';
import { Sto004EditDocComponent } from './shell/modules/sto/sto004/sto004-edit-doc/sto004-edit-doc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: Bpm000Component
  },
  {
    path: 'krnicp',
    component: KrnicpComponent,
    children: [
      {
        path: ':id/:name',
        component: ClientComponent
      }
    ]
  },
  {
    path: 'sto004',
    component: Sto004Component,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ':id',
        component: Sto004DocComponent
      },
      {
        path: ':id/edit',
        component: Sto004EditDocComponent
      }
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
