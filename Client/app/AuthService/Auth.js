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
                }
                Auth.prototype.login = function (token) {
                    localStorage.setItem("token", token);
                    console.log("Loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
                    this.loggedIn = true;
                };
                Auth.prototype.logout = function () {
                    //  let url = "/router/getsaleman?token=" + token
                    //  this._httpservice.httpGet("")
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