import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {environment} from "environments/environment";
import {map} from "rxjs/operators";
import {INewsModel} from "../../models/news.model";

@Injectable()
export class NewsRepository {
  constructor(private httpClient: HttpClient) {
  }

  getNews() {
    return this.httpClient
      .get(`${environment.api_url}/news`, {params: {}})
      .pipe(map<any, { news: INewsModel[] }>(response => response));
  }
}
