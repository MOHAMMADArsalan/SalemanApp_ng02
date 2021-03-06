System.register(["angular2/core", "angular2/common", "angular2/router", "../Service/httpservice.component", "../Service/commonService.component", "../AuthService/Auth", "../navloginbar/navloginbar.component"], function(exports_1) {
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
    var core_1, common_1, router_1, httpservice_component_1, commonService_component_1, Auth_1, navloginbar_component_1;
    var SigninComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (httpservice_component_1_1) {
                httpservice_component_1 = httpservice_component_1_1;
            },
            function (commonService_component_1_1) {
                commonService_component_1 = commonService_component_1_1;
            },
            function (Auth_1_1) {
                Auth_1 = Auth_1_1;
            },
            function (navloginbar_component_1_1) {
                navloginbar_component_1 = navloginbar_component_1_1;
            }],
        execute: function() {
            SigninComponent = (function () {
                function SigninComponent(_router, signinForm, httpservice, auth, _commonService) {
                    this._router = _router;
                    this.httpservice = httpservice;
                    this.auth = auth;
                    this._commonService = _commonService;
                    this.SigninForm = signinForm.group({
                        "email": ["", common_1.Validators.required],
                        "password": ["", common_1.Validators.required]
                    });
                    this.email = this.SigninForm.controls["email"];
                    this.password = this.SigninForm.controls["password"];
                }
                SigninComponent.prototype.ngOnInit = function () {
                    //  let token = localStorage.getItem("token");
                    var uid = localStorage.getItem("uid");
                    if (this._commonService.getToken() && uid) {
                        location.assign("/#/dashboard");
                    }
                    else {
                        location.assign("/#/company");
                    }
                };
                SigninComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var body = JSON.stringify(this.SigninForm.value);
                    var url = "/api/signin";
                    this.httpservice.httpPost(url, body)
                        .subscribe(function (res) {
                        //  localStorage.setItem("token", );
                        _this.auth.login(res.firebaseToken);
                        _this._router.navigate(["Dashboard"]);
                    }, function (err) { return _this.error = "Error to SignIn"; }); // http.post
                    // this._router.navigate(["Company"]);
                    // localStorage.setItem("id", "Arsalan");
                };
                SigninComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/signin/signin.component.html",
                        directives: [common_1.FORM_DIRECTIVES, navloginbar_component_1.NavLoginBarComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, common_1.FormBuilder, httpservice_component_1.HttpService, Auth_1.Auth, commonService_component_1.CommonService])
                ], SigninComponent);
                return SigninComponent;
            }());
            exports_1("SigninComponent", SigninComponent);
        }
    }
});
//# sourceMappingURL=signin.component.js.map