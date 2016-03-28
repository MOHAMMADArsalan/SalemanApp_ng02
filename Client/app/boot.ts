import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./app.component";
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from "angular2/router";
import {provide, ComponentRef} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {HttpService} from "./Service/httpservice.component";
import {appInjector} from "./AuthService/app-injector";
import {Auth} from "./AuthService/Auth";
bootstrap(AppComponent, [
  Auth,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  HTTP_PROVIDERS,
  HttpService
]).then((appRef: ComponentRef) => {
  // store a reference to the application injector
 appInjector(appRef.injector);
});
console.log("App is running");
