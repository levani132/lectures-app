import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { ShellComponent } from './shell/shell.component';
import { BpmComponent } from './shell/bpm/bpm.component';
import { Bpm000Component } from './shell/bpm/bpm000/bpm000.component';
import { Bpm001Component } from './shell/bpm/bpm001/bpm001.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'bpm',
        component: BpmComponent,
        children: [
          {
            path: 'bpm000',
            component: Bpm000Component,
          },
          {
            path: 'bpm001',
            component: Bpm001Component,
          },
          {
            path: '',
            redirectTo: 'bpm000',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: '',
        redirectTo: 'bpm',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
