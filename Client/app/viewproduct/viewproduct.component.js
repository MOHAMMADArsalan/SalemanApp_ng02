System.register(["angular2/core", "../navtoolbar/navtoolbar.component", "../Service/httpservice.component", "../Service/commonService.component"], function(exports_1) {
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
    var core_1, navtoolbar_component_1, httpservice_component_1, commonService_component_1;
    var ViewProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navtoolbar_component_1_1) {
                navtoolbar_component_1 = navtoolbar_component_1_1;
            },
            function (httpservice_component_1_1) {
                httpservice_component_1 = httpservice_component_1_1;
            },
            function (commonService_component_1_1) {
                commonService_component_1 = commonService_component_1_1;
            }],
        execute: function() {
            ViewProductComponent = (function () {
                function ViewProductComponent(_httpservice, _commonService) {
                    this._httpservice = _httpservice;
                    this._commonService = _commonService;
                }
                ViewProductComponent.prototype.ngOnInit = function () { this.getProduct(); };
                ViewProductComponent.prototype.getProduct = function () {
                    var _this = this;
                    var url = "/router/getproduct?token=" + this._commonService.getToken();
                    this._httpservice.httpGet(url)
                        .subscribe(function (res) { return _this.products = res; });
                };
                ViewProductComponent = __decorate([
                    core_1.Component({
                        templateUrl: "./app/viewproduct/viewproduct.component.html",
                        directives: [navtoolbar_component_1.NavToolBarComponent]
                    }), 
                    __metadata('design:paramtypes', [httpservice_component_1.HttpService, commonService_component_1.CommonService])
                ], ViewProductComponent);
                return ViewProductComponent;
            }());
            exports_1("ViewProductComponent", ViewProductComponent);
        }
    }
});
//# sourceMappingURL=viewproduct.component.js.map