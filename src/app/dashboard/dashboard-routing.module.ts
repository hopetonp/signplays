import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {extract, Route} from '@app/core';
import {DashboardComponent} from '@app/dashboard/dashboard.component';

const routes: Routes = [
  Route.withShell([
    { path: 'dashboard', component: DashboardComponent, data: { title: extract('Dashboard') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
