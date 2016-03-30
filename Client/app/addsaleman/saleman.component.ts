import {Component} from "angular2/core";
import { FORM_DIRECTIVES,
          ControlGroup,
          Control,
         FormBuilder,
         AbstractControl,
        Validators} from "angular2/common";
import {CustomFromValidation} from "../customFormValidation/CustomformValidation";
import {Router} from "angular2/router";
import {HttpService} from "../Service/httpservice.component";
@Component({
  selector: "saleman-form",
  templateUrl: "app/addsaleman/saleman.component.html",
  styleUrls: ["app/assets/style.css"],
  directives: [FORM_DIRECTIVES]
})
export class SalemanComponent {
  SalemanForm: ControlGroup;

  username: AbstractControl;
  firstname: AbstractControl;
  lastname: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  constructor(salemanform: FormBuilder, private _router: Router, private _httpservice: HttpService) {
            this.SalemanForm  = salemanform.group({
                "username": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
                "firstname": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
                "lastname": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
                "email": ["",  Validators.compose([Validators.required, CustomFromValidation.EmailValidation])],
                "password": ["", Validators.compose([Validators.required, Validators.minLength(3)])],
                "confirmPassword": ["", Validators.required]
        });
        this.username = this.SalemanForm.controls["username"];
        this.firstname = this.SalemanForm.controls["firstname"];
        this.lastname = this.SalemanForm.controls["lastname"];
        this.email = this.SalemanForm.controls["email"];
        this.password = this.SalemanForm.controls["password"];
        this.confirmPassword = this.SalemanForm.controls["confirmPassword"];

  }
    onSubmit() {
      if ( this.SalemanForm.dirty && this.SalemanForm.valid) {
        let body = JSON.stringify(this.SalemanForm.value);
        let token = localStorage.getItem("token");
        let url = "/api/addSalesman?token=" + token;
        this._httpservice.httpPost(url, body)
        .subscribe(res => { console.log("Saleman Created");
        this._router.navigate(["Dashboard"]); });
      }
    }
}
