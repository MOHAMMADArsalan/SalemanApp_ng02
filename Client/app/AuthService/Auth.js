System.register(["rxjs/Rx"], function(exports_1) {
    "use strict";
    var Rx_1;
    var Auth;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            Auth = (function () {
                function Auth() {
                    this.loggedIn = false;
                }
                Auth.prototype.login = function (token) {
                    console.log("Hello World");
                    localStorage.setItem("token", token);
                    this.loggedIn = true;
                };
                Auth.prototype.logout = function () {
                    this.loggedIn = false;
                };
                Auth.prototype.check = function () {
                    return Rx_1.Observable.of(this.loggedIn);
                };
                return Auth;
            }());
            exports_1("Auth", Auth);
        }
    }
});
//# sourceMappingURL=Auth.js.map