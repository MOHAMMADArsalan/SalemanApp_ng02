import {Component} from "angular2/core";
import {FORM_DIRECTIVES , ControlGroup, AbstractControl, FormBuilder, Validators} from "angular2/common";
import { Router } from "angular2/router";
import {HttpService} from "../Service/httpservice.component";
import {Http, Response, Headers, RequestOptions} from "angular2/http";

@Component({
  templateUrl: "app/signin/signin.component.html",
  directives: [FORM_DIRECTIVES]
})
export class SigninComponent {
  error: String;
  SigninForm: ControlGroup;
  email: AbstractControl;
  password: AbstractControl;
  constructor(private _router: Router, signinForm: FormBuilder , private httpservice: HttpService) {
    this.SigninForm = signinForm.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
    this.email = this.SigninForm.controls["email"];
    this.password = this.SigninForm.controls["password"];
  }

  onSubmit() {
    let body = JSON.stringify(this.SigninForm.value);
    this.httpservice.SignIn(body)
        .subscribe((res) => {
            localStorage.setItem("token", res.firebaseToken);
            this._router.navigate(["Company"]);
          },
        (err) => this.error = "Error to SignIn");	// http.post
        // this._router.navigate(["Company"]);
        // localStorage.setItem("id", "Arsalan");
  }
}
