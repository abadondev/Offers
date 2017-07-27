import { LOGIN_URL } from './../../../config';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private LOGIN_URL;
  private jwtHelper: JwtHelper = new JwtHelper();



  private loggedIn = false;

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
    this.loggedIn = !!sessionStorage.getItem('auth_token');
  }

  login(email, password) {
    return this.http.post(`${this.LOGIN_URL}`, {email, password}, this.options)
    .map(res => res.toString())
    .do (res => {
      if (res) sessionStorage.setItem('auth_token', res);
    })
  }

  isLoggedIn () {
    return this.loggedIn;
  }

  getToken () {
    sessionStorage.getItem('auth_token');
  }

}
