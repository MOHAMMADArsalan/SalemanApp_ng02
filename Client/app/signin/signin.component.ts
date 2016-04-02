import {Component} from "angular2/core";
import {FORM_DIRECTIVES , ControlGroup, AbstractControl, FormBuilder, Validators} from "angular2/common";
import { Router, ComponentInstruction, CanActivate } from "angular2/router";
import {HttpService} from "../Service/httpservice.component";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Auth} from "../AuthService/Auth";
import {inLoggedIn} from "../AuthService/isLoggedIn";
import {NavLoginBarComponent} from "../navloginbar/navloginbar.component";
@Component({
  templateUrl: "app/signin/signin.component.html",
  directives: [FORM_DIRECTIVES, NavLoginBarComponent]
})
export class SigninComponent {
  error: String;
  SigninForm: ControlGroup;
  email: AbstractControl;
  password: AbstractControl;
  constructor(private _router: Router, signinForm: FormBuilder , private httpservice: HttpService, public auth: Auth) {
    this.SigninForm = signinForm.group({
      "email": ["", Validators.required],
      "password": ["", Validators.required]
    });
    this.email = this.SigninForm.controls["email"];
    this.password = this.SigninForm.controls["password"];
  }
 ngOnInit() {
   let token = localStorage.getItem("token");
   let uid = localStorage.getItem("uid");
   if (token && uid) {
      location.assign("/#/dashboard");
    }
    else {
      location.assign("/#/company");
    }
 }
  onSubmit() {
    let body = JSON.stringify(this.SigninForm.value);
    let url = "/api/signin";
    this.httpservice.httpPost(url, body)
        .subscribe((res) => {
          //  localStorage.setItem("token", );
            this.auth.login(res.firebaseToken);
            this._router.navigate(["Dashboard"]);
          },
        (err) => this.error = "Error to SignIn");	// http.post
        // this._router.navigate(["Company"]);
        // localStorage.setItem("id", "Arsalan");
  }
}
