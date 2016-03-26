import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, RouterLink, RouterOutlet} from "angular2/router";

// Route Component
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { ProductComponent} from "./product/product.component";
import {CompanyComponent} from "./company/company.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SalemanComponent} from "./addsaleman/saleman.component";
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
  {path: "/addsaleman", name: "SalemanForm", component: SalemanComponent}
])
// Main bootstrap class
export class AppComponent {
  constructor() {
}
