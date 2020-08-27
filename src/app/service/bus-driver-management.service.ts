import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusDriverManagementService {

  constructor(private http: HttpClient) {}

  get_all_bus_drivers(): Observable<any> {
    return this.http.get('https://trackers-pro.herokuapp.com/api/v1.0.0/getalldrivers');/*all bus-drivers la view krana ekata*/
  }
}
