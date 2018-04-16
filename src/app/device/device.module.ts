import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import {DeviceRoutingModule} from '@app/device/device-routing.module';
import { DeviceComponent } from './device.component';
import {ModulePresenterModule, SharedModule} from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedModule,
    ModulePresenterModule
  ],
  declarations: [
    DeviceListComponent,
    DeviceDetailComponent,
    DeviceEditComponent,
    DeviceComponent
  ]
})
export class DeviceModule { }
