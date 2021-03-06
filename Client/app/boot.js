System.register(["angular2/platform/browser", "angular2/router", "angular2/core", "angular2/http", "./app.component", "./Service/httpservice.component", "./Service/commonService.component", "./AuthService/app-injector", "./AuthService/Auth"], function(exports_1) {
    "use strict";
    var browser_1, router_1, core_1, http_1, app_component_1, httpservice_component_1, commonService_component_1, app_injector_1, Auth_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (httpservice_component_1_1) {
                httpservice_component_1 = httpservice_component_1_1;
            },
            function (commonService_component_1_1) {
                commonService_component_1 = commonService_component_1_1;
            },
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            },
            function (Auth_1_1) {
                Auth_1 = Auth_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                Auth_1.Auth,
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                http_1.HTTP_PROVIDERS,
                httpservice_component_1.HttpService,
                commonService_component_1.CommonService
            ]).then(function (appRef) {
                // store a reference to the application injector
                app_injector_1.appInjector(appRef.injector);
            });
        }
    }
});
//# sourceMappingURL=boot.js.map