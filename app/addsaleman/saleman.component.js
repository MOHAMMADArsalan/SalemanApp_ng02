System.register(["angular2/core", "angular2/common", "../customFormValidation/CustomformValidation", "angular2/router"], function(exports_1) {
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
    var core_1, common_1, CustomformValidation_1, router_1;
    var SalemanComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (CustomformValidation_1_1) {
                CustomformValidation_1 = CustomformValidation_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SalemanComponent = (function () {
                function SalemanComponent(salemanform, _router) {
                    this._router = _router;
                    this.SalemanForm = salemanform.group({
                        "userName": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "firstName": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "LastName": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "email": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.EmailValidation])],
                        "password": ["", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)])],
                        "confirmPassword": ["", common_1.Validators.required]
                    });
                    this.userName = this.SalemanForm.controls["userName"];
                    this.firstName = this.SalemanForm.controls["firstName"];
                    this.lastName = this.SalemanForm.controls["LastName"];
                    this.email = this.SalemanForm.controls["email"];
                    this.password = this.SalemanForm.controls["password"];
                    this.confirmPassword = this.SalemanForm.controls["confirmPassword"];
                }
                SalemanComponent.prototype.onSubmit = function () {
                    if (this.SalemanForm.dirty && this.SalemanForm.valid) {
                        console.log(this.SalemanForm.value);
                        this._router.navigate(["Dashboard"]);
                    }
                };
                SalemanComponent = __decorate([
                    core_1.Component({
                        selector: "saleman-form",
                        templateUrl: "app/addsaleman/saleman.component.html",
                        styleUrls: ["app/assets/style.css"],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router])
                ], SalemanComponent);
                return SalemanComponent;
            }());
            exports_1("SalemanComponent", SalemanComponent);
        }
    }
});
//# sourceMappingURL=saleman.component.js.map