import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPreloadingService } from './app-preloading.service';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: AppPreloadingService }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
