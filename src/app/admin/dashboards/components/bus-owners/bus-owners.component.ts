import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';
import { BusOwnerManagementService } from '../../../../service/bus-owner-management.service'
import {Router} from '@angular/router'



@Component({
  selector: 'app-bus-owners',
  templateUrl: './bus-owners.component.html',
  styleUrls: ['./bus-owners.component.scss']
})
export class BusOwnersComponent implements OnInit {

  all_busOwners:any;

  constructor(private layoutService: LayoutService, public bus_owner_management: BusOwnerManagementService, private router:Router) { }

  ngOnInit() {
    this.get_busowner_details();
  }

  toggleRightBar(){
    this.layoutService.toggleRightBar();
  }

  get_busowner_details() {
    this.bus_owner_management.get_all_bus_owners().subscribe((result) => {
      this.all_busOwners = result.message;
    }, (error) => {
      console.log(error);
    });
  }

  onSelect(owner_mail){
    this.router.navigate(['/dashboard/busowner/viewbusowner',owner_mail]);
  }
}
