import { HttpClientService } from './../../HttpClientService/http-client-service.service';
import { CLIENT_PROJECT_URL, CLIENT_PROJECT_DETAILS_URL } from './../../../config';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClientService {



  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private httpClient: Http) {
  }

  getProjectSow(projectId) {
    return this.httpClient.get(`${CLIENT_PROJECT_URL}` + `${projectId}`)
    .map(res => res.json());
  }

  getDetails(projectDetailsId) {
    return this.httpClient.get(`${CLIENT_PROJECT_DETAILS_URL}` + `${projectDetailsId}`)
    .map(res => res.json());
  }

}
