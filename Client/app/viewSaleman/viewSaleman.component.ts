import { Component } from "angular2/core";
import {HttpService} from "../Service/httpservice.component";
@Component({
  templateUrl: `./app/viewSaleman/viewsaleman.component.html`
})
export class ViewSalemanComponent {
  saleman: Array<any>= [];
  constructor(private _httpservice: HttpService) { }
 // Get All Saleman
  ngOnInit() { this.getSaleman(); }
  // Request To db for Saleman Data
  joinedDate(date) {
     return new Date(date)
   }
   getSaleman() {
     let token = localStorage.getItem("token");
     let url = "/router/getsaleman?token=" + token;
     this._httpservice.httpGet(url)
     .subscribe(res => {console.log(res.data);
     this.saleman = res.data;});
    //      .subscribe(res => { res.data.forEach(saleman => {
    //      this.saleman.push({
    //        "username" : saleman.username,
    //        "firstname": saleman.firstname,
    //        "lastname": saleman.lastname,
    //        "email": saleman.email,
    //        "joinedDate": new Date(saleman.createdOn)
    //      });
    //    });
    // });
   }
}
