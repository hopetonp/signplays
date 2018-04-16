import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {extract, Route} from '@app/core';
import {DeviceComponent} from '@app/device/device.component';

const routes: Routes = [
  Route.withShell([
    { path: 'devices', component: DeviceComponent, data: { title: extract('Device Manager'), id: 'devices', entityName: 'Device' } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
