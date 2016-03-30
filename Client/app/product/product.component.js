System.register(["angular2/core", "angular2/common", "../customFormValidation/CustomformValidation", "angular2/router", "../Service/httpservice.component"], function(exports_1) {
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
    var core_1, common_1, CustomformValidation_1, router_1, httpservice_component_1;
    var ProductComponent;
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
            },
            function (httpservice_component_1_1) {
                httpservice_component_1 = httpservice_component_1_1;
            }],
        execute: function() {
            ProductComponent = (function () {
                function ProductComponent(productFrom, _router, _httpservice) {
                    this._router = _router;
                    this._httpservice = _httpservice;
                    this.ProductForm = productFrom.group({
                        "name": ["", common_1.Validators.compose([common_1.Validators.required, CustomformValidation_1.CustomFromValidation.isStartWithNumber])],
                        "price": ["", common_1.Validators.required],
                        "type": ["", common_1.Validators.required]
                    });
                    this.name = this.ProductForm.controls["name"];
                    this.price = this.ProductForm.controls["price"];
                    this.type = this.ProductForm.controls["type"];
                }
                ProductComponent.prototype.onSubmit = function () {
                    if (!isNaN(this.price.value)) {
                        var token = localStorage.getItem("token");
                        var body = JSON.stringify(this.ProductForm.value);
                        var url = "/router/addproduct?token=" + token;
                        this._httpservice.httpPost(url, body)
                            .subscribe(function (res) { return console.log(res); });
                    }
                    else {
                        this.notNumber = "please enter only number";
                    }
                };
                ProductComponent = __decorate([
                    core_1.Component({
                        selector: "product-form",
                        templateUrl: "app/product/product.component.html",
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, httpservice_component_1.HttpService])
                ], ProductComponent);
                return ProductComponent;
            }());
            exports_1("ProductComponent", ProductComponent);
        }
    }
});
//# sourceMappingURL=product.component.js.map