import {Component} from "angular2/core";
// component
import {NavToolBarComponent} from "../navtoolbar/navtoolbar.component";
// Service
import {HttpService} from "../Service/httpservice.component";
import {CommonService} from "../Service/commonService.component";
@Component({
    templateUrl: "./app/viewproduct/viewproduct.component.html",
    directives: [NavToolBarComponent]
})

export class ViewProductComponent {
  products: Array<any>;
  constructor(private _httpservice: HttpService, private _commonService: CommonService) { }
  ngOnInit() { this.getProduct(); }
  getProduct() {
      let url = "/router/getproduct?token=" +  this._commonService.getToken();
                this._httpservice.httpGet(url)
                .subscribe(res => this.products = res);
      }
}
