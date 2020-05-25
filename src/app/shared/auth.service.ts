import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthResponseModel } from './auth-response.model';
import { LoaderService } from './loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  register(name, username, password) {
    return this.http.post<AuthResponseModel>('register', {
      name, username, password
    }).pipe(this.loaderService.useLoader);
  }
}
