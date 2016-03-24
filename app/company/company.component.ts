import {Component} from "angular2/core";
import { FORM_DIRECTIVES,
          ControlGroup,
          Control,
          FormBuilder,
          AbstractControl,
          Validators} from "angular2/common";
import {CustomFromValidation} from "../customFormValidation/CustomformValidation";
import { Router } from "angular2/router";
@Component({
  selector: "company-form",
  templateUrl: "app/company/company.component.html",
  directives: [FORM_DIRECTIVES]
})
export class CompanyComponent {
  CompanyForm: ControlGroup;

  companyName: AbstractControl;
  address: AbstractControl;

  constructor(companyFrom: FormBuilder, private _router: Router) {
    this.CompanyForm = companyFrom.group({
      "companyName": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
      "address": ["" , Validators.required]
    });
    this.companyName = this.CompanyForm.controls["companyName"];
    this.address = this.CompanyForm.controls["address"];
  }

  onSubmit() {
   console.log("ckjckc", this.CompanyForm);
   this._router.navigate(["Dashboard"]);
  }
}
