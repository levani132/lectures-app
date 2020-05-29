import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloadingService } from './preloading.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./shell/shell.module').then((m) => m.ShellModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    data: { preload: true },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadingService }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
