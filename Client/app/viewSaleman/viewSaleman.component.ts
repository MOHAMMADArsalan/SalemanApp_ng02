import { Component } from "angular2/core";
// Services
import {HttpService} from "../Service/httpservice.component";
import {CommonService} from "../Service/commonService.component";
// Component
import {NavToolBarComponent} from "../navtoolbar/navtoolbar.component";

@Component({
  templateUrl: `./app/viewSaleman/viewsaleman.component.html`,
  directives: [NavToolBarComponent]
})
export class ViewSalemanComponent {
  saleman: Array<any>= [];
  constructor(private _httpservice: HttpService, private _commonService: CommonService) { }

 // Get All Saleman
  ngOnInit() { this.getSaleman(); }
 // Convert ISO Date to in Date
  joinedDate(date) {
     return new Date(date);
   }
   // Request To db for Saleman Data
   getSaleman() {
     let url = "/router/getsaleman?token=" + this._commonService.getToken();
     this._httpservice.httpGet(url)
     .subscribe(res => {console.log(res.data);
     this.saleman = res.data; });
   }
}
