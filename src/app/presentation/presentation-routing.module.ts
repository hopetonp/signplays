import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {extract, Route} from '@app/core';
import {PresentationComponent} from '@app/presentation/presentation.component';

const routes: Routes = [
  Route.withShell([
    { path: 'presentations', component: PresentationComponent, data: { title: extract('Presentation Manager'), id: 'presentations', entityName: 'Presentation' } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
