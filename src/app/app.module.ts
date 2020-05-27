import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { UrlInterceptorService } from './shared/url-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { ShellComponent } from './shell/shell.component';
import { BpmComponent } from './shell/bpm/bpm.component';
import { Bpm000Component } from './shell/bpm/bpm000/bpm000.component';
import { Bpm001Component } from './shell/bpm/bpm001/bpm001.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ShellComponent,
    BpmComponent,
    Bpm000Component,
    Bpm001Component,
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
