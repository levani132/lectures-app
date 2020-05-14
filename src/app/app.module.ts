import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
