import {Component} from "angular2/core";
import {NavToolBarComponent} from "../navtoolbar/navtoolbar.component";
import {HttpService} from "../Service/httpservice.component";
@Component({
    templateUrl: "./app/viewproduct/viewproduct.component.html",
    directives: [NavToolBarComponent]
})

export class ViewProductComponent {
  products: Array<any>;
  constructor(private _httpservice: HttpService) { }
  ngOnInit() { this.getProduct(); }
  getProduct() {
      let token = localStorage.getItem("token");
      let url = "/router/getproduct?token=" + token;

      this._httpservice.httpGet(url)
            .subscribe(res => this.products = res);
            }
}
