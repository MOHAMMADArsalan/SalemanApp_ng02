import { Component } from "angular2/core";
import {HttpService} from "../Service/httpservice.component";
@Component({
  templateUrl: `./app/viewSaleman/viewsaleman.component.html`
})
export class ViewSalemanComponent {
  saleman: Array<any>= [];
  constructor(private _httpservice: HttpService) { }
  ngOnInit() { this.getSaleman(); }
   getSaleman() {
     let token = localStorage.getItem("token");
     let url = "/router/getsaleman?token=" + token;
     this._httpservice.httpGet(url)
         .subscribe(res => { res.data.forEach(saleman => {
         this.saleman.push({
           "username" : saleman.username,
           "firstname": saleman.firstname,
           "lastname": saleman.lastname,
           "email": saleman.email,
           "joinedDate": saleman.createdOn
         });
       });
     console.log(this.saleman)});
   }
}
