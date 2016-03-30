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
  selector: "product-form",
  templateUrl: "app/product/product.component.html",
  directives: [FORM_DIRECTIVES]
})
export class ProductComponent {
  ProductForm: ControlGroup;

  name: AbstractControl;
  price: AbstractControl;
  type: AbstractControl;
  notNumber: string;
  adminId: string;
  companyId: string;
  constructor(productFrom: FormBuilder, private _router: Router, private _httpservice: HttpService) {
    this.ProductForm = productFrom.group({
      "name": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
      "price": ["" , Validators.required],
      "type": ["" , Validators.required]
    });
    this.name = this.ProductForm.controls["name"];
    this.price = this.ProductForm.controls["price"];
    this.type = this.ProductForm.controls["type"];
  }

  onSubmit() {
    if (!isNaN(this.price.value)) {
      let token = localStorage.getItem("token");
      let body = JSON.stringify(this.ProductForm.value);
      let url = "/router/addproduct?token=" + token;
         this._httpservice.httpPost(url, body)
                  .subscribe(res => console.log(res));
    }else {
     this.notNumber = "please enter only number";
    }
  }
}
