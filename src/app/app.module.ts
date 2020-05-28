import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { UrlInterceptorService } from './shared/url-interceptor.service';
import { AuthComponent } from './auth/auth.component';
import { ShellComponent } from './shell/shell.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { BpmModule } from './shell/bpm/bpm.module';
import { AuthModule } from './auth/auth.module';
import { ShellModule } from './shell/shell.module';

@NgModule({
  declarations: [
    AppComponent,
    // Shell module
    // ShellComponent,
    // Auth module
    // AuthComponent,
    // LoginComponent,
    // RegisterComponent,
    // Shared module
    LoaderComponent,
    AlertComponent,
    PlaceholderDirective,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    // Shell module
    // BpmModule,
    AuthModule,
    ShellModule
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
