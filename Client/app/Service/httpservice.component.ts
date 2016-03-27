import {Injectable} from "angular2/core";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import { Observable} from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()

export class HttpService {
   constructor(private _http: Http) { }
      // Sign up
   SignUp(form) {
      let headers: Headers = new Headers();
      headers.append("Content-Type", "application/json");
      let options: RequestOptions = new RequestOptions();
      options.headers = headers;
      return  this._http.post("/api/signup", form, options)
                            .map(res => res.json());
    }

    SignIn(form) {
      let headers: Headers = new Headers();
      headers.append("Content-Type", "application/json");
      let options: RequestOptions = new RequestOptions();
      options.headers = headers;

      return this._http.post("/api/signin", form, options)
                              .map(res => res.json());
   }
    AddCompany(form) {
      let headers: Headers = new Headers();
      headers.append("Content-Type", "application/json");
      let options: RequestOptions = new RequestOptions();
      options.headers = headers;
        let token = localStorage.getItem("token");
      return this._http.post("/api/addCompany?token=" + token, form, options)
                              .map(res => res.json());
   }
}
