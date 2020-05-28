import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class URLInterceptorService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log('my interceptor works');
        const editedRequest = request.clone({
            url: 'https://bog-angular-course-api.herokuapp.com/lectures-api/' + request.url
        });
        return next.handle(editedRequest);
    }
}
