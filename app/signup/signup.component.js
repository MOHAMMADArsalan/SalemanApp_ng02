System.register(["angular2/core", "angular2/common", "../customFormValidation/CustomformValidation"], function(exports_1) {
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
    var core_1, common_1, CustomformValidation_1;
    var SignupComponent;
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
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(signupform) {
                    this.SignupForm = signupform.group({
                        "userName": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "firstName": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "LastName": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "email": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.EmailValidation])],
                        "password": ["", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)])],
                        "confirmPassword": ["", common_1.Validators.required]
                    });
                    this.userName = this.SignupForm.controls["userName"];
                    this.firstName = this.SignupForm.controls["firstName"];
                    this.lastName = this.SignupForm.controls["LastName"];
                    this.email = this.SignupForm.controls["email"];
                    this.password = this.SignupForm.controls["password"];
                    this.confirmPassword = this.SignupForm.controls["confirmPassword"];
                }
                SignupComponent.prototype.onSubmit = function () {
                    if (this.SignupForm.dirty && this.SignupForm.valid) {
                        console.log(this.SignupForm.value);
                    }
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/signup/signup.component.html",
                        styleUrls: ["app/assets/style.css"],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map