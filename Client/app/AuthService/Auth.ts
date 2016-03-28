import {Observable} from "rxjs/Rx";
export class Auth {
  loggedIn: boolean;
  constructor() {
     this.loggedIn = false;
   }
   login(token) {
     console.log("Hello World");
     localStorage.setItem("token", token);
      this.loggedIn = true;
   }
   logout() {
      this.loggedIn = false;
   }
check() {
  return Observable.of(this.loggedIn);
  }
}
