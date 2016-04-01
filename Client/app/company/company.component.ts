import {Component, OnInit} from "angular2/core";
import { FORM_DIRECTIVES,
          ControlGroup,
          Control,
          FormBuilder,
          AbstractControl,
          Validators} from "angular2/common";
import {CustomFromValidation} from "../customFormValidation/CustomformValidation";
import { Router , CanActivate, ComponentInstruction} from "angular2/router";
import {HttpService} from "../Service/httpservice.component";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {inLoggedIn} from "../AuthService/isLoggedIn";
import {Auth} from "../AuthService/Auth";
import {NavToolBarComponent} from "../navtoolbar/navtoolbar.component";
@Component({
  selector: "company-form",
  templateUrl: "app/company/company.component.html",
  directives: [FORM_DIRECTIVES, NavToolBarComponent]
})
@CanActivate((next: ComponentInstruction, prev: ComponentInstruction) => {
  return inLoggedIn(next , prev);
})
export class CompanyComponent {
  CompanyForm: ControlGroup;

  companyName: AbstractControl;
  address: AbstractControl;
  id: string;
  uid: string;
  constructor(companyFrom: FormBuilder, private _router: Router, private _httpservice: HttpService, private auth: Auth) {
    this.CompanyForm = companyFrom.group({
      "companyName": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
      "address": ["" , Validators.required]
    });
    this.companyName = this.CompanyForm.controls["companyName"];
    this.address = this.CompanyForm.controls["address"];
  }
  ngOnInit() {
      let token = localStorage.getItem("token");
  }
  onSubmit() {
    let token = localStorage.getItem("token");
    let body = JSON.stringify(this.CompanyForm.value);
    let url = "/api/addCompany?token=" + token;
    this._httpservice.httpPost(url, body)
          .subscribe((res) => {
           this.auth.login(token);
          //localStorage.setItem("uid", this.uid);
          this._router.navigate(["Dashboard"]);
  });
  }
}
