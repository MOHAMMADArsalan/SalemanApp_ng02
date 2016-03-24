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
  selector: "product-form",
  templateUrl: "app/product/product.component.html",
  directives: [FORM_DIRECTIVES]
})
export class ProductComponent {
  ProductForm: ControlGroup;

  productName: AbstractControl;
  price: AbstractControl;
  type: AbstractControl;
  notNumber: string
  constructor(productFrom: FormBuilder, private _router: Router) {
    this.ProductForm = productFrom.group({
      "productName": ["", Validators.compose([Validators.required, CustomFromValidation.isStartWithNumber])],
      "price": ["" , Validators.required],
      "type": ["" , Validators.required]
    });
    this.productName = this.ProductForm.controls["productName"];
    this.price = this.ProductForm.controls["price"];
    this.type = this.ProductForm.controls["type"];
  }

  onSubmit() {
    if (!isNaN(this.price.value)) {
         console.log(this.price.value);
         this._router.navigate(["Dashboard"]);
    }else {
     this.notNumber = "please enter only number";
    }
  }
}
