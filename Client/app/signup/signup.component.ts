import { Component } from "angular2/core";
import { FORM_DIRECTIVES,
          ControlGroup,
          Control,
         FormBuilder,
         AbstractControl,
        Validators} from "angular2/common";
import {CustomFromValidation} from "../customFormValidation/CustomformValidation";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {HttpService} from "../Service/httpservice.component";
import {Router} from "angular2/router";
@Component({
  templateUrl: "app/signup/signup.component.html",
  styleUrls: ["app/assets/style.css"],
  directives: [FORM_DIRECTIVES]
})
export class SignupComponent {
  SignupForm: ControlGroup;

  username: AbstractControl;
  firstname: AbstractControl;
  lastname: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;

  constructor(signupform: FormBuilder, private _http: Http, private httpservice: HttpService, private _router: Router) {

      this.SignupForm  = signupform.group({
          "username": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
          "firstname": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
          "lastname": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
          "email": ["",  Validators.compose([Validators.required, CustomFromValidation.EmailValidation])],
          "password": ["", Validators.compose([Validators.required, Validators.minLength(3)])],
          "confirmPassword": ["", Validators.required]
      });
      this.username = this.SignupForm.controls["username"];
      this.firstname = this.SignupForm.controls["firstname"];
      this.lastname = this.SignupForm.controls["lastname"];
      this.email = this.SignupForm.controls["email"];
      this.password = this.SignupForm.controls["password"];
      this.confirmPassword = this.SignupForm.controls["confirmPassword"];

  }
  // Submit  form
  onSubmit() {
    if ( this.SignupForm.dirty && this.SignupForm.valid) {
      let body = JSON.stringify(this.SignupForm.value);
      this.httpservice.SignUp(body)
     .subscribe((res: Response) => {
      this._router.navigate(["Signin"]);	// callBack
            });	// http.post
    }
  }
}
