import { Component } from "angular2/core";
import {HttpService} from "../Service/httpservice.component";
@Component({
  templateUrl: `./app/viewSaleman/viewsaleman.component.html`
})
export class ViewSalemanComponent {
  saleman: Array<any>= [];
  constructor(private _httpservice: HttpService) { }
   getSaleman() {
     let token = localStorage.getItem("token");
     let url = "/router/getsaleman?token=" + token;
     this._httpservice.httpGet(url)
         .subscribe(res => { res.data.forEach(saleman => {
         this.saleman.push({
           "username" : saleman.username
         })

       })
     console.log(this.saleman)});

   }
}
