System.register(["angular2/core", "../Service/httpservice.component"], function(exports_1) {
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
    var core_1, httpservice_component_1;
    var ViewSalemanComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpservice_component_1_1) {
                httpservice_component_1 = httpservice_component_1_1;
            }],
        execute: function() {
            ViewSalemanComponent = (function () {
                function ViewSalemanComponent(_httpservice) {
                    this._httpservice = _httpservice;
                    this.saleman = [];
                }
                // Get All Saleman
                ViewSalemanComponent.prototype.ngOnInit = function () { this.getSaleman(); };
                // Request To db for Saleman Data
                ViewSalemanComponent.prototype.joinedDate = function (date) {
                    return new Date(date);
                };
                ViewSalemanComponent.prototype.getSaleman = function () {
                    var _this = this;
                    var token = localStorage.getItem("token");
                    var url = "/router/getsaleman?token=" + token;
                    this._httpservice.httpGet(url)
                        .subscribe(function (res) {
                        console.log(res.data);
                        _this.saleman = res.data;
                    });
                    //      .subscribe(res => { res.data.forEach(saleman => {
                    //      this.saleman.push({
                    //        "username" : saleman.username,
                    //        "firstname": saleman.firstname,
                    //        "lastname": saleman.lastname,
                    //        "email": saleman.email,
                    //        "joinedDate": new Date(saleman.createdOn)
                    //      });
                    //    });
                    // });
                };
                ViewSalemanComponent = __decorate([
                    core_1.Component({
                        templateUrl: "./app/viewSaleman/viewsaleman.component.html"
                    }), 
                    __metadata('design:paramtypes', [httpservice_component_1.HttpService])
                ], ViewSalemanComponent);
                return ViewSalemanComponent;
            }());
            exports_1("ViewSalemanComponent", ViewSalemanComponent);
        }
    }
});
//# sourceMappingURL=viewSaleman.component.js.map