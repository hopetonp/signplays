import {Component, OnInit, ViewChild} from '@angular/core';
import {SchedulingService} from '@app/scheduling/scheduling.service';
import { extend } from '@syncfusion/ej2-base';
import {ScheduleComponent} from '@syncfusion/ej2-ng-schedule';
import {scheduleData} from '@app/scheduling/datasource';
import { EventSettingsModel} from '@syncfusion/ej2-ng-schedule';
import { ChangeEventArgs } from '@syncfusion/ej2-ng-calendars';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: <Object[]>extend([], scheduleData, null, true) };
  @ViewChild('schedule')
  public schedule: ScheduleComponent;

  onDateChange(args: ChangeEventArgs): void {
    this.schedule.selectedDate = args.value;
  }

  constructor(private schedulingService: SchedulingService) { }

  ngOnInit() {

  }

}
