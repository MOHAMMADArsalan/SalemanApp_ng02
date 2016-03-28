// import {Injector} from "angular2/core";
// import {appInjector} from "./app-injector";
// import {Auth} from "./Auth";
// import {Router, ComponentInstruction} from "angular2/router";
//
// export const inLoggedIn = (next: ComponentInstruction, prev: ComponentInstruction) => {
//  let injector: Injector = appInjector();
//  let auth: Auth = injector.get(Auth);
//  let router: Router = injector.get(Router);
//
//  return new Promise(resolve => {
//     auth.check()
//     .subscribe((result) => {
//       if (result) {
//           console.log("result");
//           resolve(true);
//       }
//       else {
//          console.log("rssesult");
//           router.navigate(["Signin"]);
//           resolve(false);
//              }
//     });
//  });
// };
import {Injector} from "angular2/core";
import {appInjector} from "./app-injector";
import {Auth} from "./Auth";
import {Router, ComponentInstruction} from "angular2/router";

export const inLoggedIn = (next: ComponentInstruction, previous: ComponentInstruction) => {
    let injector: Injector = appInjector(); // get the stored reference to the injector
    let auth: Auth = injector.get(Auth);
    let router: Router = injector.get(Router);

  // return a boolean or a promise that resolves a boolean
    return new Promise((resolve) => {
      auth.check()
          .subscribe((result) => {
                    if (result) {
                        resolve(true);
                    } else {
                        router.navigate(["Signin"]);
                        resolve(false);
                    }
                });
  });
};
