import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {extract, Route} from '@app/core';
import {SchedulingComponent} from '@app/scheduling/scheduling.component';

const routes: Routes = [
  Route.withShell([
    { path: 'scheduling', component: SchedulingComponent, data: { title: extract('Scheduling'), entity: 'scheduling', entityName: 'Scheduling' } }
  ])

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }
