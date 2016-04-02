import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouterLink} from "angular2/router";
import {Auth} from "../AuthService/Auth";
@Component({
  selector: "nav-tool-bar",
  templateUrl: "./app/navtoolbar/navtoolbar.component.html",
  directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class NavToolBarComponent {
  constructor(private _auth: Auth) { }
  logout() {
    this._auth.logout();
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
  }
}
