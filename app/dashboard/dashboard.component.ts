import {Component} from "angular2/core";
import {RouterLink} from "angular2/router";

@Component({
  templateUrl: "app/dashboard/dashboard.component.html",
  directives: [RouterLink]
})
export class DashboardComponent {
  constructor() { }
}
