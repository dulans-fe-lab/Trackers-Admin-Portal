import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../layout/services/layout.service';
import { User } from '../../models/user';
import { BusOwnerManagementService } from "../../../../../service/bus-owner-management.service";


@Component({
  selector: 'app-add-bus-owner',
  templateUrl: './add-bus-owner.component.html',
  styleUrls: ['./add-bus-owner.component.scss']
})
export class AddBusOwnerComponent implements OnInit {

  userModel = new User('','','','',null,'','');  

  constructor(private layoutService: LayoutService, private busOwnerManagementService: BusOwnerManagementService) { }

  ngOnInit() {
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

  onSubmit(){
    this.busOwnerManagementService.enroll(this.userModel)
      .subscribe(
        data => console.log('success',data),
        error =>console.error('Error',error)
        // https://www.youtube.com/watch?v=lmteIO2FQYA&list=PLC3y8-rFHvwhwL-XH04cHOpJnkgRKykFi&index=12
         
      )
  }
}
