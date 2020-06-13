import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';
import { BusManagementService } from '../../../../service/bus-management.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.scss']
})
export class BusesComponent implements OnInit {
  all_buses: any;

  constructor(private layoutService: LayoutService, public bus_management: BusManagementService, private router:Router) { }

  ngOnInit() {
    this.get_bus_details();
  }

  toggleRightBar() {
    this.layoutService.toggleRightBar();
  }

  get_bus_details() {
    this.bus_management.get_all_buses().subscribe((result) => {
      this.all_buses = result.message;
      console.log(this.all_buses);
    }, (error) => {
      console.log(error);
    });
  }

  deleteBus(){
    this.bus_management
  }


  onSelect(bus_number){
    this.router.navigate(['/dashboard/buses/viewbus',bus_number]);
  }
  // routerLink = "/dashboard/buses/viewbus"
}
