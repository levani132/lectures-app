import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

import { AuthResponseModel } from './auth-response.model';
import { LoaderService } from '../loader/loader.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(undefined);

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService,
    private router: Router
  ) {}

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

  logout() {
    this.user.next(undefined);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const user = new User(
      userData.name,
      userData.username,
      userData.image,
      userData._token,
      new Date(userData._tokeExpirationDate)
    );
    if (!user.token) {
      return;
    }
    this.user.next(user);
  }

  handleAuth = (resData: AuthResponseModel) => {
    const user = new User(
      resData.name,
      resData.username,
      resData.image,
      resData.token,
      new Date(resData.expirationDate)
    );
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  };
}
