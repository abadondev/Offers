import { LOGIN_URL, REGISTER_URL } from './../../../config';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private LOGIN_URL;
  private user_role;
  private jwtHelper: JwtHelper = new JwtHelper();
  private loggedIn = false;

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
    this.loggedIn = !!sessionStorage.getItem('auth_token');
  }

  login(email, password) {
    return this.http.post(LOGIN_URL, { email, password }, this.options)
      .map(res => res['_body'])
      .do(res => {
        if (res) {
          this.user_role = this.jwtHelper.decodeToken(res).al
          sessionStorage.setItem('auth_token', res);
          sessionStorage.setItem('user_role', this.user_role)
        };
      })
  }

    register(email, password, firsttName, lastName) {
    return this.http.post(REGISTER_URL, { email, password, firsttName, lastName }, this.options)

  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getToken() {
    sessionStorage.getItem('auth_token');
  }
  getUserRole() {
    sessionStorage.getItem('user_role');
  }

}
