import {Component, OnInit} from "angular2/core";
import { FORM_DIRECTIVES,
          ControlGroup,
          Control,
          FormBuilder,
          AbstractControl,
          Validators} from "angular2/common";
import {CustomFromValidation} from "../customFormValidation/CustomformValidation";
import { Router } from "angular2/router";
import {HttpService} from "../Service/httpservice.component";
import {Http, Response, Headers, RequestOptions} from "angular2/http";
@Component({
  selector: "company-form",
  templateUrl: "app/company/company.component.html",
  directives: [FORM_DIRECTIVES]
})
export class CompanyComponent {
  CompanyForm: ControlGroup;

  companyName: AbstractControl;
  address: AbstractControl;
id: string;
  constructor(companyFrom: FormBuilder, private _router: Router, private _httpservice: HttpService) {
    this.CompanyForm = companyFrom.group({
      "companyName": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
      "address": ["" , Validators.required]
    });
    this.companyName = this.CompanyForm.controls["companyName"];
    this.address = this.CompanyForm.controls["address"];
  }
  onSubmit() {
    let body = JSON.stringify(this.CompanyForm.value);
    this._httpservice.AddCompany(body)
          .subscribe((res) => {console.log(res)})
        //  this._router.navigate(["Dashboard"]);
  }
}
