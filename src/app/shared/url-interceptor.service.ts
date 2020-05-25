import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

const BASE_URL = 'https://bog-angular-course-api.herokuapp.com/';

export class UrlInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req.clone({
      url: BASE_URL + req.url
    }));
  }
}
