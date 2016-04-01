import {Component} from "angular2/core";
import {RouterLink, CanActivate, ComponentInstruction} from "angular2/router";
import {inLoggedIn} from "../AuthService/isLoggedIn";
import {NavToolBarComponent} from "../navtoolbar/navtoolbar.component";
@Component({
  templateUrl: "app/dashboard/dashboard.component.html",
  directives: [RouterLink, NavToolBarComponent]
})
@CanActivate((next: ComponentInstruction, prev: ComponentInstruction) => {
    return inLoggedIn(next, prev);
})
export class DashboardComponent {
  constructor() {
 }
}
