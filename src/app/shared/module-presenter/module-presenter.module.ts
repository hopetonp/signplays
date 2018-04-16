import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulePresenterComponent } from './module-presenter.component';
import { ModulePresenterHeaderComponent } from './module-presenter-header/module-presenter-header.component';
import { ModulePresenterItemDetailsComponent } from './module-presenter-item-details/module-presenter-item-details.component';
import { ModulePresenterSidebarComponent } from './module-presenter-sidebar/module-presenter-sidebar.component';
import { ModulePresenterItemsComponent } from './module-presenter-items/module-presenter-items.component';
import { MaterialModule, SyncfusionModule, SharedModule} from '@app/shared';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    SyncfusionModule
  ],
  exports: [
    ModulePresenterComponent,
    ModulePresenterHeaderComponent,
    ModulePresenterItemDetailsComponent,
    ModulePresenterSidebarComponent,
    ModulePresenterItemsComponent
  ],
  declarations: [
    ModulePresenterComponent,
    ModulePresenterHeaderComponent,
    ModulePresenterItemDetailsComponent,
    ModulePresenterSidebarComponent,
    ModulePresenterItemsComponent]
})
export class ModulePresenterModule { }
