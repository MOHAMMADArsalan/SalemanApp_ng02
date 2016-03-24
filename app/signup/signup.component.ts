import { Component } from "angular2/core";
import { FORM_DIRECTIVES,
          ControlGroup,
          Control,
         FormBuilder,
         AbstractControl,
        Validators} from "angular2/common";
import {CustomFromValidation} from "../customFormValidation/CustomformValidation";
@Component({
  templateUrl: "app/signup/signup.component.html",
  styleUrls: ["app/assets/style.css"],
  directives: [FORM_DIRECTIVES]
})
export class SignupComponent {
  SignupForm: ControlGroup;

  userName: AbstractControl;
  firstName: AbstractControl;
  lastName: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;

  constructor(signupform: FormBuilder ) {

      this.SignupForm  = signupform.group({
          "userName": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
          "firstName": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
          "LastName": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
          "email": ["",  Validators.compose([Validators.required, CustomFromValidation.EmailValidation])],
          "password": ["", Validators.compose([Validators.required, Validators.minLength(3)])],
          "confirmPassword": ["", Validators.required]
      });
      this.userName = this.SignupForm.controls["userName"];
      this.firstName = this.SignupForm.controls["firstName"];
      this.lastName = this.SignupForm.controls["LastName"];
      this.email = this.SignupForm.controls["email"];
      this.password = this.SignupForm.controls["password"];
      this.confirmPassword = this.SignupForm.controls["confirmPassword"];

  }
  onSubmit() {
    if ( this.SignupForm.dirty && this.SignupForm.valid) {
      console.log(this.SignupForm.value);
    }
  }
}
