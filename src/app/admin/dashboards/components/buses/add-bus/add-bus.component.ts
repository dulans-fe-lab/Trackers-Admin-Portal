import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../layout/services/layout.service';
import { FormArray } from '@angular/forms';
import { Bus } from "../../models/bus";
import { BusManagementService } from "../../../../../service/bus-management.service";

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.scss']
})
export class AddBusComponent implements OnInit {

  busModule = new Bus("","","","","");

  cities = [{
    city_name: ""
  }];
  constructor(private layoutService: LayoutService,private busManagementService: BusManagementService) { }

  ngOnInit() {
    
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

  addCitiesButton(){
    var cityName=(<HTMLInputElement>document.getElementById("mainCities")).value;
    this.cities.push({
        city_name: cityName
      });
  }

  removeCitiesButton(){
    this.cities.pop();
  }

  onSubmit(){
    this.busManagementService.enroll(this.busModule)
    .subscribe(
      data => console.log('success',data),
      error =>console.error('Error',error)
      // https://www.youtube.com/watch?v=lmteIO2FQYA&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&index=12
       
    )
  }
}
