import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { take, switchMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      switchMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedRequest = req.clone({
          headers: req.headers.append('Authorization', `Bearer ${user.token}`),
        });
        return next.handle(modifiedRequest);
      })
    );
  }
}
