import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaLibraryRoutingModule } from './media-library-routing.module';
import { MediaLibraryComponent } from './media-library.component';
import {ModulePresenterModule, SharedModule} from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    MediaLibraryRoutingModule,
    SharedModule,
    ModulePresenterModule
  ],
  declarations: [MediaLibraryComponent]
})
export class MediaLibraryModule { }
