System.register(["angular2/core", "angular2/common", "../customFormValidation/CustomformValidation", "angular2/http", "../Service/httpservice.component", "angular2/router"], function(exports_1) {
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
    var core_1, common_1, CustomformValidation_1, http_1, httpservice_component_1, router_1;
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
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (httpservice_component_1_1) {
                httpservice_component_1 = httpservice_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(signupform, _http, httpservice, _router) {
                    this._http = _http;
                    this.httpservice = httpservice;
                    this._router = _router;
                    this.SignupForm = signupform.group({
                        "username": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "firstname": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "lastname": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "email": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.EmailValidation])],
                        "password": ["", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3)])],
                        "confirmPassword": ["", common_1.Validators.required]
                    });
                    this.username = this.SignupForm.controls["username"];
                    this.firstname = this.SignupForm.controls["firstname"];
                    this.lastname = this.SignupForm.controls["lastname"];
                    this.email = this.SignupForm.controls["email"];
                    this.password = this.SignupForm.controls["password"];
                    this.confirmPassword = this.SignupForm.controls["confirmPassword"];
                }
                // Submit  form
                SignupComponent.prototype.onSubmit = function () {
                    var _this = this;
                    if (this.SignupForm.dirty && this.SignupForm.valid) {
                        var body = JSON.stringify(this.SignupForm.value);
                        this.httpservice.SignUp(body)
                            .subscribe(function (res) {
                            _this._router.navigate(["Signin"]); // callBack
                        }); // http.post
                    }
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/signup/signup.component.html",
                        styleUrls: ["app/assets/style.css"],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, httpservice_component_1.HttpService, router_1.Router])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map