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
    var CompanyComponent;
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
            CompanyComponent = (function () {
                function CompanyComponent(companyFrom, _router) {
                    this._router = _router;
                    this.CompanyForm = companyFrom.group({
                        "companyName": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "address": ["", common_1.Validators.required]
                    });
                    this.companyName = this.CompanyForm.controls["companyName"];
                    this.address = this.CompanyForm.controls["address"];
                }
                CompanyComponent.prototype.onSubmit = function () {
                    console.log("ckjckc", this.CompanyForm);
                    this._router.navigate(["Dashboard"]);
                };
                CompanyComponent = __decorate([
                    core_1.Component({
                        selector: "company-form",
                        templateUrl: "app/company/company.component.html",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router])
                ], CompanyComponent);
                return CompanyComponent;
            }());
            exports_1("CompanyComponent", CompanyComponent);
        }
    }
});
//# sourceMappingURL=company.component.js.map