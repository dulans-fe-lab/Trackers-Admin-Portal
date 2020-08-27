import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from "../admin/dashboards/components/models/bus";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusManagementService {

  constructor(private http: HttpClient) { }

  get_all_buses(): Observable<any> {
    return this.http.get('https://trackers-pro.herokuapp.com/api/v1.0.0/getallbuses');
  }

  // Add bus ekata req krana ekaa
  enroll(bus: Bus){
    return this.http.post<any>('https://trackers-pro.herokuapp.com/api/v1.0.0/busregistration',bus);
  }

  getBusDetails(bus_no: any): Observable<any> {
    return this.http.get('https://trackers-pro.herokuapp.com/api/v1.0.0/getbus/' + bus_no);
  }


}
