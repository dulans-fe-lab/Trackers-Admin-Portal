import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../admin/dashboards/components/models/user';

@Injectable({
  providedIn: 'root'
})
export class BusOwnerManagementService {

  _url = ""

  constructor(private http: HttpClient) { }

  get_all_bus_owners(): Observable<any> {
    return this.http.get('https://trackers-pro.herokuapp.com/api/v1.0.0/getallowners');/*all bus-owners la view krana ekata*/
  }

  // Add buss owner ekata post reqest eka yawana eka 
  // https://www.youtube.com/watch?v=lmteIO2FQYA&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&index=12 
  enroll(user: User){
    return this.http.post<any>('https://trackers-pro.herokuapp.com/api/v1.0.0/registerowner',user);
  }

  
  getBusOwnerDetails(owner_mail: any): Observable<any> {
    return this.http.get('https://trackers-pro.herokuapp.com/api/v1.0.0/getowner/' + owner_mail);
  }

}
 