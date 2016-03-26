System.register([], function(exports_1) {
    "use strict";
    var CustomFromValidation;
    return {
        setters:[],
        execute: function() {
            CustomFromValidation = (function () {
                function CustomFromValidation() {
                }
                CustomFromValidation.isStartWithNumber = function (control) {
                    if (control.value !== "" && !isNaN(control.value.charAt(0))) {
                        return { "isStartWithNumber": true };
                    }
                    return null;
                };
                CustomFromValidation.EmailValidation = function (control) {
                    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                    if (control.value !== "" && !control.value.match(pattern)) {
                        return { "EmailValidation": true };
                    }
                    return null;
                };
                return CustomFromValidation;
            }());
            exports_1("CustomFromValidation", CustomFromValidation);
        }
    }
});
//# sourceMappingURL=CustomformValidation.js.map