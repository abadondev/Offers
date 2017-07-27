import { AuthService } from './../shared/services/auth.service';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class HttpClientService {

  constructor(private http: Http, private auth: AuthService) {}

  get(url) {
    return this.http.get(url, {
      headers: this.prepareHeaders()
    });
  }

  post(url, data) {
    return this.http.post(url, data, {
      headers: this.prepareHeaders()
    });
  }

  put(url, data) {
    return this.http.put(url, data, {
      headers: this.prepareHeaders()
    });
  }

  private createAuthorizationHeader(headers: Headers) {
    const token = this.auth.getToken();

    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
  }

  private prepareHeaders() {
    const headers = new Headers();

    this.createAuthorizationHeader(headers);

    return headers;
  }
}