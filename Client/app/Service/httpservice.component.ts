import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import { Router } from "angular2/router";
import { Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()

export class HttpService {
   constructor(private _http: Http, private _router: Router) { }

      // Method For All Post Request
   httpPost(url, form) {
      let headers: Headers = new Headers();
      headers.append("Content-Type", "application/json");
      let options: RequestOptions = new RequestOptions();
      options.headers = headers;
      return  this._http.post(url, form, options)
                            .map(res => res.json());
    }
    httpGet(url) {
      return this._http.get(url)
                  .map(res => res.json());
   }
}
