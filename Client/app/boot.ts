import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./app.component";
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from "angular2/router";
import {provide} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {HttpService} from "./Service/httpservice.component";
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  HTTP_PROVIDERS,
  HttpService
]);
console.log("App is running");