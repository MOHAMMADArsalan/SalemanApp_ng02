import {Component} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import { Router } from "angular2/router";

@Component({
  templateUrl: "app/signin/signin.component.html",
  directives: [FORM_DIRECTIVES]
})
export class SigninComponent {
  constructor(private _router: Router) { }
  onSubmit(Form) {
  this._router.navigate(["Company"]);
  localStorage.setItem("id", "Arsalan");
  }
}
