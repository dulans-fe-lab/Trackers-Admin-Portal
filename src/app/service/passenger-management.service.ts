import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerManagementService {

  constructor(private http: HttpClient) { }

  get_all_passengers(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1.0.0/getallpassengers');
  }



}
