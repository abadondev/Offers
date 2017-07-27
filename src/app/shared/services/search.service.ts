import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  private companyUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private queryUrl: string = '?search=';

  constructor(private http: Http) {
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
}

  searchEntries(term) {
    return this.http
        .get(this.companyUrl + term)
        .map(res => res.json());
  }

}
