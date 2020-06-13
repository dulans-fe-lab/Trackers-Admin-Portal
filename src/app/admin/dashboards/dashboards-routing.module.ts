import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { BusesComponent } from './components/buses/buses.component';
import { AddBusComponent } from './components/buses/add-bus/add-bus.component';
import { BusOwnersComponent } from './components/bus-owners/bus-owners.component';
import { AddBusOwnerComponent } from './components/bus-owners/add-bus-owner/add-bus-owner.component';
import { BusDriversComponent } from './components/bus-drivers/bus-drivers.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { ViewBusLocationComponent } from './components/buses/view-bus-location/view-bus-location.component';
import { ViewBusOwnerComponent } from './components/bus-owners/view-bus-owner/view-bus-owner.component';
import { ViewBusComponent } from './components/buses/view-bus/view-bus.component';
import { ViewBusDriverComponent } from './components/bus-drivers/view-bus-driver/view-bus-driver.component';

const routes: Routes = [
  {
      path: '',
      component: DashboardComponent,
      children: [
          { path: '', redirectTo:'index', pathMatch: 'full'},
          { path: 'index', component: IndexComponent, data: { title: ':: Aero Angular :: Dashboard ::' }}
      ]
  },
  {
    path: 'buses',
    component:BusesComponent
  },

  {
    path: 'addbus',
    component:AddBusComponent
  },

  {
    path:'busowner',
    component:BusOwnersComponent
  },
  {
    path:'addbusowner',
    component:AddBusOwnerComponent
  },
  {
    path:'busowner/viewbusowner/:owner_mail',
    component:ViewBusOwnerComponent
  },
  {
    path:'busdriver',
    component:BusDriversComponent
  },
  {
    path:'busdriver/viewbusdriver',
    component:ViewBusDriverComponent
  },
  {
    path:'passenger',
    component:PassengersComponent
  },
  {
    path:'buses/location',
    component:ViewBusLocationComponent
  },
  {
    path:'buses/viewbus/:bus_no',
    component:ViewBusComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
