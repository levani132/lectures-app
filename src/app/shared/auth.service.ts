import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponseModel } from './auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(name, username, password) {
    return this.http.post<AuthResponseModel>('register', {
      name, username, password
    });
  }
}
