import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { NumberGuard } from './number-guard.service';
import { FifthResolver } from './fifth/fifth-resolver.service';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    canActivate: [NumberGuard]
  },
  {
    path: 'second',
    component: SecondComponent,
    canActivate: [NumberGuard]
  },
  {
    path: 'third',
    component: ThirdComponent,
    canActivate: [NumberGuard]
  },
  {
    path: 'fourth',
    component: FourthComponent,
    canActivate: [NumberGuard]
  },
  {
    path: 'fifth',
    component: FifthComponent,
    resolve: { fifth: FifthResolver }
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
