import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { BusesComponent } from './components/buses/buses.component';
import { BusOwnersComponent } from './components/bus-owners/bus-owners.component';
import { BusDriversComponent } from './components/bus-drivers/bus-drivers.component';
import { AddBusComponent } from './components/buses/add-bus/add-bus.component';
import { AddBusOwnerComponent } from './components/bus-owners/add-bus-owner/add-bus-owner.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { ViewBusLocationComponent } from './components/buses/view-bus-location/view-bus-location.component';
import { ViewBusOwnerComponent } from './components/bus-owners/view-bus-owner/view-bus-owner.component';
import { ViewBusComponent } from './components/buses/view-bus/view-bus.component';
import { ViewBusDriverComponent } from './components/bus-drivers/view-bus-driver/view-bus-driver.component';


@NgModule({
  declarations: [DashboardComponent, IndexComponent, BusesComponent, BusOwnersComponent, BusDriversComponent, AddBusComponent, AddBusOwnerComponent, PassengersComponent, ViewBusLocationComponent, ViewBusOwnerComponent, ViewBusComponent, ViewBusDriverComponent],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    FormsModule
  ]
})
export class DashboardsModule { }
