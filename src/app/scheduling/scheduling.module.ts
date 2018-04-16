import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulingRoutingModule } from './scheduling-routing.module';
import { SchedulingComponent } from './scheduling.component';
import {SchedulingService} from '@app/scheduling/scheduling.service';
import {ModulePresenterModule, SharedModule, SyncfusionModule} from '@app/shared';


@NgModule({
  imports: [
    CommonModule,
    SchedulingRoutingModule,
    SharedModule,
    ModulePresenterModule,
    SyncfusionModule
  ],
  declarations: [
    SchedulingComponent
  ],
  providers: [
    SchedulingService
  ]
})
export class SchedulingModule { }
