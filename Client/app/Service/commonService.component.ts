import {Injectable} from "angular2/core";
@Injectable()
export class CommonService {
  token: string;
  constructor() { }

  getToken() {
    let token = localStorage.getItem("token");
    return this.token = token;
  }
}
