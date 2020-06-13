import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';
import { PassengerManagementService } from '../../../../service/passenger-management.service'


@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {
  all_passengers: any;


  constructor(private layoutService: LayoutService, public passenger_management: PassengerManagementService) { }

  ngOnInit() {
    this.get_passenger_details();
  }

  toggleRightBar() {
    this.layoutService.toggleRightBar();
  }

  get_passenger_details() {
    this.passenger_management.get_all_passengers().subscribe((result) => {
      this.all_passengers = result.message;
    }, (error) => {
      console.log(error);
    });
  }

}
