import {Component} from "angular2/core";
import {RouterLink, CanActivate, ComponentInstruction} from "angular2/router";
import {NavToolBarComponent} from "../navtoolbar/navtoolbar.component";

// Service
import {HttpService} from "../Service/httpservice.component";
import {inLoggedIn} from "../AuthService/isLoggedIn"; // Auth Service
@Component({
  templateUrl: "app/dashboard/dashboard.component.html",
  directives: [RouterLink, NavToolBarComponent]
})
@CanActivate((next: ComponentInstruction, prev: ComponentInstruction) => {
    return inLoggedIn(next, prev);
})
export class DashboardComponent {
  constructor(private _httpservice: HttpService) {
 }
}
