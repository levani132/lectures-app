import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class UrlInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(
      req.clone({
        url: environment.apiUrl + req.url,
      })
    );
  }
}
