import { Component } from '@angular/core';
import { Passenger } from './admin/dashboards/components/models/passenger.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storedPassengers: Passenger[] = [];
  title = 'Aero Angular';
}
