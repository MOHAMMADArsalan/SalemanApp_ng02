import {Observable} from "rxjs/Rx";
import {HttpService} from "../Service/httpservice.component";
export class Auth {
  loggedIn: boolean;
  constructor() {
   }
   login(token) {
     localStorage.setItem("token", token);
     console.log("Loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
      this.loggedIn = true;
   }
   logout() {
    //  let url = "/router/getsaleman?token=" + token
    //  this._httpservice.httpGet("")
      this.loggedIn = false;
   }
check() {
  return Observable.of(this.loggedIn);
  }
}
