import {Observable} from "rxjs/Rx";
export class Auth {
  loggedIn: boolean;
  constructor() {
    // localStorage.setItem("uid", "Arslaan");
     let token = localStorage.getItem("token");
     if (token) {
       this.loggedIn = true;
     }
     else {
       this.loggedIn = false;
     }
   }
   login(token) {
     console.log(token);
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
