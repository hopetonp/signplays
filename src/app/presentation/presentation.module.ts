import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';
import { PresentationListComponent } from './presentation-list/presentation-list.component';
import { PresentationEditComponent } from './presentation-edit/presentation-edit.component';
import { PresentationDetailComponent } from './presentation-detail/presentation-detail.component';
import { PresentationComponent } from './presentation.component';
import {ModulePresenterModule, SharedModule, SyncfusionModule} from '@app/shared';


@NgModule({
  imports: [
    CommonModule,
    PresentationRoutingModule,
    SharedModule,
    ModulePresenterModule,
    SyncfusionModule
  ],
  declarations: [
    PresentationListComponent,
    PresentationEditComponent,
    PresentationDetailComponent,
    PresentationComponent
  ]
})
export class PresentationModule { }
