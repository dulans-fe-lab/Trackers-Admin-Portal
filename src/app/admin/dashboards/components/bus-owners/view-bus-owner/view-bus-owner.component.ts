import { Component, OnInit } from '@angular/core';
import { BusOwnerManagementService } from '../../../../../service/bus-owner-management.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-bus-owner',
  templateUrl: './view-bus-owner.component.html',
  styleUrls: ['./view-bus-owner.component.scss']
})
export class ViewBusOwnerComponent implements OnInit {
  owner_details;
  owner_mail;
  constructor(private busOwnerManagementService :BusOwnerManagementService, private route :ActivatedRoute) { }


  ngOnInit() {
    let ownermail=this.route.snapshot.paramMap.get('owner_mail');
    this.owner_mail=ownermail;
    console.log("bsdjbfks");
    console.log(this.owner_mail);
    this.get_busowners_details(this.owner_mail);
    
  }

  get_busowners_details(owner_mail){
    this.busOwnerManagementService.getBusOwnerDetails(owner_mail).subscribe((result) => {
      this.owner_details =result.message;
      console.log("hiii");
      console.log(this.owner_details);
    })
  }

}
