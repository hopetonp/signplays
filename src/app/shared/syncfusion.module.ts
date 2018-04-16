import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridAllModule} from '@syncfusion/ej2-ng-grids';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-ng-schedule';
import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-ng-calendars';
import { CheckBoxAllModule } from '@syncfusion/ej2-ng-buttons';
import { ToolbarAllModule, TreeViewAllModule } from '@syncfusion/ej2-ng-navigations';
import { MaskedTextBoxModule, NumericTextBoxAllModule } from '@syncfusion/ej2-ng-inputs';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-ng-dropdowns';

@NgModule({
  imports: [
    CommonModule,
    TreeViewAllModule,
    GridAllModule,
  ],
  exports: [
    TreeViewAllModule,
    GridAllModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    CheckBoxAllModule,
    ToolbarAllModule,
    DropDownListAllModule,
    MaskedTextBoxModule,
    MultiSelectAllModule
  ],
  declarations: []
})
export class SyncfusionModule { }
