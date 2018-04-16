import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {extract, Route} from '@app/core';
import {MediaLibraryComponent} from '@app/media-library/media-library.component';

const routes: Routes = [
  Route.withShell([
    { path: 'medialibrary', component: MediaLibraryComponent, data: { title: extract('Media Library') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaLibraryRoutingModule { }
