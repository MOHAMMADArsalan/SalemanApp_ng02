System.register(["angular2/core", "angular2/router", "../navtoolbar/navtoolbar.component", "../Service/httpservice.component", "../AuthService/isLoggedIn"], function(exports_1) {
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
    var core_1, router_1, navtoolbar_component_1, httpservice_component_1, isLoggedIn_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navtoolbar_component_1_1) {
                navtoolbar_component_1 = navtoolbar_component_1_1;
            },
            function (httpservice_component_1_1) {
                httpservice_component_1 = httpservice_component_1_1;
            },
            function (isLoggedIn_1_1) {
                isLoggedIn_1 = isLoggedIn_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_httpservice) {
                    this._httpservice = _httpservice;
                }
                DashboardComponent = __decorate([
                    // Auth Service
                    core_1.Component({
                        templateUrl: "app/dashboard/dashboard.component.html",
                        directives: [router_1.RouterLink, navtoolbar_component_1.NavToolBarComponent]
                    }),
                    router_1.CanActivate(function (next, prev) {
                        return isLoggedIn_1.inLoggedIn(next, prev);
                    }), 
                    __metadata('design:paramtypes', [httpservice_component_1.HttpService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map