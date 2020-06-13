import { Component, OnInit } from '@angular/core';
import { BusManagementService } from "../../../../../service/bus-management.service";
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrls: ['./view-bus.component.scss']
})
export class ViewBusComponent implements OnInit {

  bus_details;
  bus_no;
  constructor(private busManagementService: BusManagementService, private route :ActivatedRoute) { }

  ngOnInit() {
    let busNo=this.route.snapshot.paramMap.get('bus_no');
    this.bus_no=busNo;
    console.log(this.bus_no);
    this.get_bus_details(this.bus_no);
  }


  get_bus_details(bus_no){
    this.busManagementService.getBusDetails(bus_no).subscribe((result) => {
      this.bus_details =result.message;
      console.log(this.bus_details);
    })
  }


}
