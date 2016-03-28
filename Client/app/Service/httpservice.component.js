System.register(["angular2/core", "angular2/http", "angular2/router", "rxjs/Rx"], function(exports_1) {
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
    var core_1, http_1, router_1;
    var HttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            HttpService = (function () {
                function HttpService(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                }
                //    IsloggedIn() {
                //    let token = localStorage.getItem("token");
                //    if (token) {
                //       return true;
                //    }else {
                //       this._router.navigate(["SignIn"]);
                //    }
                // }
                // Sign up
                HttpService.prototype.SignUp = function (form) {
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/json");
                    var options = new http_1.RequestOptions();
                    options.headers = headers;
                    return this._http.post("/api/signup", form, options)
                        .map(function (res) { return res.json(); });
                };
                HttpService.prototype.SignIn = function (form) {
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/json");
                    var options = new http_1.RequestOptions();
                    options.headers = headers;
                    return this._http.post("/api/signin", form, options)
                        .map(function (res) { return res.json(); });
                };
                HttpService.prototype.AddCompany = function (form) {
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/json");
                    var options = new http_1.RequestOptions();
                    options.headers = headers;
                    var token = localStorage.getItem("token");
                    return this._http.post("/api/addCompany?token=" + token, form, options)
                        .map(function (res) { return res.json(); });
                };
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], HttpService);
                return HttpService;
            }());
            exports_1("HttpService", HttpService);
        }
    }
});
//# sourceMappingURL=httpservice.component.js.map