import {Component} from "angular2/core";
import {NavToolBarComponent} from "../navtoolbar/navtoolbar.component";
@Component({
    templateUrl: "./app/viewproduct/viewproduct.component.html",
    directives: [NavToolBarComponent]
})

export class ViewProductComponent {
  constructor() { }
}
