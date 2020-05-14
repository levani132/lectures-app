import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { EvenGuard } from './even-guard.service';
import { FifthResolver } from './fifth/fifth-resolver.service';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    canActivate: [EvenGuard]
  },
  {
    path: 'second',
    component: SecondComponent,
    canActivate: [EvenGuard]
  },
  {
    path: 'third',
    component: ThirdComponent,
    canActivate: [EvenGuard]
  },
  {
    path: 'fourth',
    component: FourthComponent,
    canActivate: [EvenGuard]
  },
  {
    path: 'fifth',
    component: FifthComponent,
    canActivate: [EvenGuard],
    resolve: {
      people: FifthResolver
    }
  },
  {
    path: '**',
    redirectTo: '/first'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
