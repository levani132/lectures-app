import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'some-token')
    });
    console.log('Request has been intercepted');
    return next.handle(modifiedRequest).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Response) {
        console.log('Response arrived, body:');
        console.log(event.body[0]);
      }
    }));
  }
}
