import {Component , OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, RouterLink, RouterOutlet, CanActivate, Router} from "angular2/router";

// Services
import {HttpService} from "./Service/httpservice.component";
import {CommonService} from "./Service/commonService.component";
// Route Component
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { ProductComponent} from "./product/product.component";
import {CompanyComponent} from "./company/company.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SalemanComponent} from "./addsaleman/saleman.component";
import {ViewSalemanComponent} from "./viewSaleman/viewSaleman.component";
import {ViewProductComponent} from "./viewproduct/viewproduct.component";
import {Auth} from "./AuthService/Auth";

// Component
@Component({
  selector: "app",
  templateUrl:   `./app/app.component.html`,
  directives: [ROUTER_DIRECTIVES, RouterLink]
})
// Route Config
@RouteConfig([
  {path: "/signin", name: "Signin", component: SigninComponent},
  {path: "/signup", name: "Signup", component: SignupComponent, useAsDefault: true},
  {path: "/product", name: "Product", component: ProductComponent},
  {path: "/company", name: "Company", component: CompanyComponent},
  {path: "/dashboard", name: "Dashboard", component: DashboardComponent},
  {path: "/addsaleman", name: "SalemanForm", component: SalemanComponent},
  {path: "/viewsaleman", name: "ViewSaleman", component: ViewSalemanComponent},
  {path: "/viewproduct", name: "ViewProduct", component: ViewProductComponent}
])

// Main bootstrap class
export class AppComponent {
  token:  string;
  uid: string;
  constructor(private _router: Router, private auth: Auth, private _commonService: CommonService) {
    this.token = this._commonService.getToken();
    this.uid = localStorage.getItem("uid");
    if (this.token && this.uid) {
        this._router.navigate(["Dashboard"]);
    }
    else {
         this._router.navigate(["Signin"]);
    }
  }

}
