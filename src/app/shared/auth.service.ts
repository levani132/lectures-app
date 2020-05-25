import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

import { AuthResponseModel } from './auth-response.model';
import { LoaderService } from './loader/loader.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  register(name, username, password) {
    return this.http
      .post<AuthResponseModel>('register', {
        name,
        username,
        password,
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        tap((resData) => this.handleAuth(resData))
      );
  }

  login(username, password) {
    return this.http
      .post<AuthResponseModel>('login', {
        username,
        password,
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        tap((resData) => this.handleAuth(resData))
      );
  }

  handleAuth = (req: AuthResponseModel) => {
    this.user.next(
      new User(
        req.name,
        req.username,
        req.image,
        req.token,
        new Date(req.expirationDate)
      )
    );
  };
}
