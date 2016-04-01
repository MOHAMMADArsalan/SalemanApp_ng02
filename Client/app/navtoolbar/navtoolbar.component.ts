import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouterLink} from "angular2/router";

@Component({
  selector: "nav-tool-bar",
  templateUrl: "./app/navtoolbar/navtoolbar.component.html",
  directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class NavToolBarComponent {
  constructor() { }
}
