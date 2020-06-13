import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';
import { BusDriverManagementService } from '../../../../service/bus-driver-management.service'


@Component({
  selector: 'app-bus-drivers',
  templateUrl: './bus-drivers.component.html',
  styleUrls: ['./bus-drivers.component.scss']
})
export class BusDriversComponent implements OnInit {

  all_busDrivers:any;
  constructor(private layoutService: LayoutService,public bus_driver_management: BusDriverManagementService) { }

  ngOnInit() {
    this.get_passenger_details();
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

  get_passenger_details() {
    this.bus_driver_management.get_all_bus_drivers().subscribe((result) => {
      this.all_busDrivers = result.message;
    }, (error) => {
      console.log(error);
    });
  }

}
