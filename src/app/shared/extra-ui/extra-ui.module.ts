import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TreeViewComponent} from '@app/shared/extra-ui/tree-view/tree-view.component';
import {TreeViewItemComponent} from '@app/shared/extra-ui/tree-view/tree-view-item/tree-view-item.component';
import {MaterialModule} from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    TreeViewComponent,
    TreeViewItemComponent
  ],
  exports: [
    TreeViewComponent,
    TreeViewItemComponent
  ]
})
export class ExtraUiModule { }
