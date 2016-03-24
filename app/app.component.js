System.register(["angular2/core", "angular2/router", "./signup/signup.component", "./signin/signin.component", "./product/product.component", "./company/company.component", "./dashboard/dashboard.component", "./addsaleman/saleman.component"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, signup_component_1, signin_component_1, product_component_1, company_component_1, dashboard_component_1, saleman_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            },
            function (company_component_1_1) {
                company_component_1 = company_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (saleman_component_1_1) {
                saleman_component_1 = saleman_component_1_1;
            }],
        execute: function() {
            // Component
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app",
                        templateUrl: "./app/app.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink]
                    }),
                    router_1.RouteConfig([
                        { path: "/signin", name: "Signin", component: signin_component_1.SigninComponent },
                        { path: "/signup", name: "Signup", component: signup_component_1.SignupComponent, useAsDefault: true },
                        { path: "/product", name: "Product", component: product_component_1.ProductComponent },
                        { path: "/company", name: "Company", component: company_component_1.CompanyComponent },
                        { path: "/dashboard", name: "Dashboard", component: dashboard_component_1.DashboardComponent },
                        { path: "/addsaleman", name: "SalemanForm", component: saleman_component_1.SalemanComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map