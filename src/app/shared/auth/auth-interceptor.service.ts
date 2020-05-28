import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { take, switchMap } from 'rxjs/operators';


@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService){}


  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return this.authService.user.pipe(
      take(1),
      switchMap(
        (user) => {
          if(!user){
            return next.handle(req);
          }

          const modifiedRequest = req.clone({headers: req.headers.append('Authorizarion', 'Bearer ' + user.token)});
          return next.handle(modifiedRequest);
        }
      )
    )
  }
}
