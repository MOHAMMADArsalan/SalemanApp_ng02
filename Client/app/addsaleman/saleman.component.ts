import {Component} from "angular2/core";
import { FORM_DIRECTIVES,
          ControlGroup,
          Control,
         FormBuilder,
         AbstractControl,
        Validators} from "angular2/common";
import {CustomFromValidation} from "../customFormValidation/CustomformValidation";
import {Router} from "angular2/router";
@Component({
  selector: "saleman-form",
  templateUrl: "app/addsaleman/saleman.component.html",
  styleUrls: ["app/assets/style.css"],
  directives: [FORM_DIRECTIVES]
})
export class SalemanComponent {
  SalemanForm: ControlGroup;

  userName: AbstractControl;
  firstName: AbstractControl;
  lastName: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  constructor(salemanform: FormBuilder, private _router: Router) {

        this.SalemanForm  = salemanform.group({
            "userName": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
            "firstName": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
            "LastName": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
            "email": ["",  Validators.compose([Validators.required, CustomFromValidation.EmailValidation])],
            "password": ["", Validators.compose([Validators.required, Validators.minLength(3)])],
            "confirmPassword": ["", Validators.required]
        });
        this.userName = this.SalemanForm.controls["userName"];
        this.firstName = this.SalemanForm.controls["firstName"];
        this.lastName = this.SalemanForm.controls["LastName"];
        this.email = this.SalemanForm.controls["email"];
        this.password = this.SalemanForm.controls["password"];
        this.confirmPassword = this.SalemanForm.controls["confirmPassword"];

  }
    onSubmit() {
      if ( this.SalemanForm.dirty && this.SalemanForm.valid) {
        this._router.navigate(["Dashboard"]);
      }
    }
}
