import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouterLink} from "angular2/router";
@Component({
  selector: "nav-login-bar",
  templateUrl: "./app/navloginbar/navloginbar.component.html",
  directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class NavLoginBarComponent {
  constructor() { }
}
