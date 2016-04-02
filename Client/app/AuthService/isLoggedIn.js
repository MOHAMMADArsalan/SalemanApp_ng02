System.register(["angular2/router", "./app-injector", "./Auth"], function(exports_1) {
    "use strict";
    var router_1, app_injector_1, Auth_1;
    var inLoggedIn;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            },
            function (Auth_1_1) {
                Auth_1 = Auth_1_1;
            }],
        execute: function() {
            exports_1("inLoggedIn", inLoggedIn = function (next, previous) {
                var injector = app_injector_1.appInjector(); // get the stored reference to the injector
                var auth = injector.get(Auth_1.Auth);
                var router = injector.get(router_1.Router);
                // return a boolean or a promise that resolves a boolean
                return new Promise(function (resolve) {
                    auth.check()
                        .subscribe(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            router.navigate(["Signin"]);
                            resolve(false);
                        }
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=isLoggedIn.js.map