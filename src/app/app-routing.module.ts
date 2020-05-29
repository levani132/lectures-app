import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPreloadService } from './my-preload.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    data: { preload: true }
  },
  {
    path: '',
    loadChildren: () => import('./shell/shell.module').then((m) => m.ShellModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: MyPreloadService })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
